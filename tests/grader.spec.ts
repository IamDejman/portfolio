import { expect, test, type Page } from '@playwright/test';

const graded = {
  criteria: [
    { id: 'hypothesis', name: 'Hypothesis', score: 3, evidence: 'the price rise is pushing out monthly-plan customers', evidenceFound: true, explanation: 'Two specific, testable explanations tied to recent changes.' },
    { id: 'investigation', name: 'Investigation plan', score: 2, evidence: "I'd split retention by plan, signup month and platform", evidenceFound: true, explanation: 'Concrete segments, though the order of checks is not explained.' },
    { id: 'measurement', name: 'Measurement', score: 3, evidence: 'expect retention back above 90% within two cohorts', evidenceFound: false, explanation: 'A threshold and a holdout to verify the fix.' },
  ],
  total: 8,
  max: 9,
  summary: 'A specific, well-structured answer.',
  confidence: 'high',
  needsReview: true,
  reviewReasons: ['The measurement quote is not in the answer.'],
  seconds: 4.2,
};

// Stands in for /api/grade so the tests never call the model. Returns the
// answers the page sent.
async function mockGrader(page: Page, reply = { status: 200, body: graded as unknown }) {
  const sent: string[] = [];
  await page.route('**/api/grade', async (route) => {
    if (route.request().method() === 'GET') return route.fulfill({ json: { available: true } });
    sent.push(route.request().postDataJSON().answer);
    await route.fulfill({ status: reply.status, json: reply.body });
  });
  return sent;
}

test('the live grader stays hidden until grading is set up', async ({ page }) => {
  await page.route('**/api/grade', (route) => route.fulfill({ json: { available: false } }));
  await Promise.all([page.waitForResponse('**/api/grade'), page.goto('/work/skilladder')]);
  await expect(page.getByRole('heading', { name: 'Inside an assessment.' })).toBeVisible();
  await expect(page.locator('.live-grader')).toHaveCount(0);
});

test('an answer is graded, flagged and can be overridden in one click', async ({ page }) => {
  const sent = await mockGrader(page);
  await page.goto('/work/skilladder');
  const grader = page.locator('.live-grader');
  await expect(grader.getByRole('heading', { name: 'Grade an answer, live.' })).toBeVisible();
  await grader.getByRole('button', { name: 'Strong answer' }).click();
  await expect(grader.getByLabel('Your answer')).toHaveValue(/price rise in March/);
  await grader.getByRole('button', { name: 'Grade the answer' }).click();

  const total = grader.locator('.grader-total');
  await expect(total).toContainText('8');
  await expect(grader.getByText('The measurement quote is not in the answer.')).toBeVisible();
  await expect(grader.getByText('Not found in the answer')).toBeVisible();
  expect(sent).toHaveLength(1);
  expect(sent[0]).toContain('price rise in March');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);

  const investigation = grader.getByRole('group', { name: 'Investigation plan score' });
  await expect(investigation.getByRole('radio', { name: '2', exact: true })).toBeChecked();
  await investigation.getByRole('radio', { name: '3', exact: true }).check();
  await expect(total).toContainText('9');
  await expect(total).toContainText('changed by you');
  await grader.getByRole('button', { name: 'Restore the grader’s 2' }).click();
  await expect(investigation.getByRole('radio', { name: '2', exact: true })).toBeChecked();
  await expect(total).not.toContainText('changed by you');
});

test('a short answer is caught before it is sent', async ({ page }) => {
  const sent = await mockGrader(page);
  await page.goto('/work/skilladder');
  const grader = page.locator('.live-grader');
  await grader.getByLabel('Your answer').fill('Churn went up.');
  await grader.getByRole('button', { name: 'Grade the answer' }).click();
  await expect(grader.getByText('Write at least a couple of sentences')).toBeVisible();
  expect(sent).toHaveLength(0);
});

test('a busy grader says so', async ({ page }) => {
  await mockGrader(page, { status: 429, body: { error: 'That is a lot of grading. Try again in a few minutes.' } });
  await page.goto('/work/skilladder');
  const grader = page.locator('.live-grader');
  await grader.getByRole('button', { name: 'Weak answer' }).click();
  await grader.getByRole('button', { name: 'Grade the answer' }).click();
  await expect(grader.getByText('That is a lot of grading. Try again in a few minutes.')).toBeVisible();
  await expect(grader.locator('.grader-outcome')).toHaveCount(0);
});

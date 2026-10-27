import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const routes = ['/', '/work', '/about', '/skills', '/notes', '/contact', '/privacy', '/cv', '/work/skilladder', '/work/orderflow', '/work/onboarding-engine', '/work/carbin', '/work/tellerpoint', '/notes/letting-ai-grade-carefully', '/notes/pending-is-not-paid', '/notes/reliability-nobody-asks-for', '/not-a-page'];

// WCAG 2.2 A and AA, plus axe's best practices. Pages are checked in their
// final state: the default project reduces motion, so nothing is mid-reveal.
const audit = async (page: Page) => {
  await page.evaluate(() => document.fonts.ready);
  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
    .analyze();
  // Each entry names the rule and where it failed, so a failure says what to fix.
  return violations.map((v) => `${v.id}: ${v.help} (${v.nodes.map((n) => n.target.join(' ')).join(', ')})`);
};

for (const route of routes) {
  test(`${route} passes an accessibility audit`, async ({ page }) => {
    await page.goto(route);
    expect(await audit(page)).toEqual([]);
  });
}

test('the open menu passes an accessibility audit', async ({ page }) => {
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  test.skip(!(await menu.isVisible()), 'The menu button only shows on narrow screens');
  await menu.click();
  await expect(page.getByRole('button', { name: 'Close', exact: true })).toHaveAttribute('aria-expanded', 'true');
  expect(await audit(page)).toEqual([]);
});

test('the live grader and a graded result pass an accessibility audit', async ({ page }) => {
  await page.route('**/api/grade', (route) =>
    route.request().method() === 'GET'
      ? route.fulfill({ json: { available: true } })
      : route.fulfill({
          json: {
            criteria: [
              { id: 'hypothesis', name: 'Hypothesis', score: 3, evidence: 'the price rise is pushing out monthly-plan customers', evidenceFound: true, explanation: 'Two specific, testable explanations.' },
              { id: 'investigation', name: 'Investigation plan', score: 2, evidence: "I'd split retention by plan, signup month and platform", evidenceFound: true, explanation: 'Concrete segments.' },
              { id: 'measurement', name: 'Measurement', score: 0, evidence: '', evidenceFound: false, explanation: 'No measure.' },
            ],
            total: 5,
            max: 9,
            summary: 'A specific answer without a measure.',
            confidence: 'low',
            needsReview: true,
            reviewReasons: ['The grader asked for a person to check this result.'],
            seconds: 3.1,
          },
        }),
  );
  await page.goto('/work/skilladder');
  const grader = page.locator('.live-grader');
  await grader.getByRole('button', { name: 'Strong answer' }).click();
  await grader.getByRole('button', { name: 'Grade the answer' }).click();
  await expect(grader.locator('.grader-outcome')).toBeVisible();
  await grader.getByText('What each score means').click();
  expect(await audit(page)).toEqual([]);
});

import { expect, test } from '@playwright/test';

const routes = ['/', '/work', '/about', '/skills', '/contact', '/privacy', '/work/skilladder', '/work/orderflow', '/work/onboarding-engine', '/work/carbin', '/work/tellerpoint'];
for (const route of routes) {
  test(`${route} fits the viewport`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('project descriptions share a column and case study navigation works', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const starts = await page.locator('.experiment-list > a > p').evaluateAll(els => els.map(el => el.getBoundingClientRect().left));
  expect(Math.max(...starts) - Math.min(...starts)).toBeLessThan(1);
  await page.getByRole('link', { name: 'Read the full Skilladder AI case study' }).click();
  await expect(page).toHaveURL(/\/work\/skilladder$/);
});

test('navigation and filters remain usable', async ({ page }) => {
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  if (await menu.isVisible()) {
    await menu.click();
    await page.getByRole('navigation', { name: 'Mobile main' }).getByRole('link', { name: 'Work', exact: true }).click();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
  } else {
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Work', exact: true }).click();
  }
  await expect(page).toHaveURL(/\/work$/);
  await page.getByRole('button', { name: 'Product leadership', exact: true }).click();
  await expect(page.locator('.work-index-list').getByRole('heading', { name: 'Hotel California' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Built', exact: true }).click();
  await expect(page.locator('.work-index-list').getByRole('heading', { name: 'Hotel California' })).toBeVisible();
});

test('sculpture rotates on drag and stays still with reduced motion', async ({ page }) => {
  await page.goto('/');
  const canvas = page.getByRole('img', { name: /Interactive possibility engine/ });
  const pixels = () => canvas.evaluate(el => (el as HTMLCanvasElement).toDataURL());
  await expect.poll(() => canvas.evaluate(el => (el as HTMLCanvasElement).width)).toBeGreaterThan(0);
  await canvas.scrollIntoViewIfNeeded();
  const box = (await canvas.boundingBox())!;
  const before = await pixels();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.65, { steps: 8 });
  await expect.poll(pixels).not.toBe(before);
  await page.mouse.up();
  await expect(canvas).not.toHaveAttribute('data-dragging');
  const after = await pixels();
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  expect(await pixels()).toBe(after);
  await canvas.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(pixels).not.toBe(after);
});

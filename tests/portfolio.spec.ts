import { expect, test } from '@playwright/test';

const routes = ['/', '/work', '/about', '/skills', '/notes', '/contact', '/privacy', '/work/skilladder', '/work/orderflow', '/work/onboarding-engine', '/work/tellerpoint', '/notes/letting-ai-grade-carefully', '/notes/pending-is-not-paid', '/notes/reliability-nobody-asks-for'];
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

test('navigation reaches a Work page that leads with built products', async ({ page }) => {
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
  const groups = await page.locator('main h2').allTextContents();
  expect(groups.map((g) => g.replace(/\s+/g, ' ').trim())).toEqual([
    'Products I built.',
    'More case studies.',
    'Earlier product roles.',
    'Other builds and experiments.',
  ]);
  // The first two products are named by their logos, so check accessible names.
  const built = page.getByRole('region', { name: 'Products I built.' }).getByRole('heading', { level: 3 });
  const products = ['Skilladder', 'Orderflow', 'GRWTEE', 'Banyan Claims', 'Harvesters Workers System'];
  await expect(built).toHaveCount(products.length);
  for (const [i, name] of products.entries()) await expect(built.nth(i)).toHaveAccessibleName(name);
  await expect(page.getByRole('region', { name: 'Earlier product roles.' }).getByRole('heading', { level: 3 })).toHaveText(['Carbin Africa', 'GPS', 'Switch Recycling', 'BetaCare']);
  await expect(page.locator('.work-index-list').getByRole('heading', { name: 'Hotel California' })).toBeVisible();
});

test('every case study tells its story in the same order', async ({ page }) => {
  const order = ['The problem', /^What I (built|delivered)$/, 'The stack', /^The (hard bug|tradeoff)$/, 'The result', 'See it'];
  for (const slug of ['skilladder', 'orderflow', 'onboarding-engine', 'tellerpoint']) {
    await page.goto(`/work/${slug}`);
    const headings = (await page.locator('.case-prose > section > h2').allTextContents()).map((h) => h.replace(/^\d+/, ''));
    // Parts may be left out, but those present keep the shared order.
    const positions = headings.map((h) => order.findIndex((o) => (typeof o === 'string' ? o === h : o.test(h))));
    expect(positions, `${slug}: ${headings.join(', ')}`).not.toContain(-1);
    expect(positions, `${slug}: ${headings.join(', ')}`).toEqual([...positions].sort((a, b) => a - b));
    expect(headings.slice(0, 2)).toEqual(['The problem', expect.stringMatching(/^What I/)]);
  }
});

test('the folded Carbin case study redirects to earlier product roles', async ({ page }) => {
  await page.goto('/work/carbin');
  await expect(page).toHaveURL(/\/work#earlier-roles$/);
  await expect(page.getByRole('heading', { name: 'Carbin Africa' })).toBeVisible();
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

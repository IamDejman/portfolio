import { expect, test, type Page } from '@playwright/test';

declare global {
  interface Window {
    transitionLayers: string[];
  }
}

// Scrolls to the end in steps shorter than the viewport, so every element
// spends at least one frame on screen.
const scrollThrough = (page: Page) =>
  page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      scrollTo({ top: y, behavior: 'instant' });
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 40)));
    }
    scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
  });

test.describe('with motion', () => {
  test.use({ reducedMotion: 'no-preference' });

  test('content below the fold reveals as it scrolls into view', async ({ page }) => {
    for (const route of ['/', '/work/orderflow', '/about']) {
      await page.goto(route);
      await expect(page.locator('html')).toHaveAttribute('data-motion', 'on');
      await expect(page.locator('.is-armed').first()).toBeAttached();
      await scrollThrough(page);
      await expect.poll(() => page.locator('.is-armed:not(.is-revealed)').count()).toBe(0);
    }
  });

  test('a project card carries its logo into the case study', async ({ page }) => {
    await page.addInitScript(() => {
      window.transitionLayers = [];
      const start = document.startViewTransition?.bind(document);
      if (!start) return;
      document.startViewTransition = ((update: Parameters<typeof start>[0]) => {
        const transition = start(update);
        transition.ready
          .then(() => {
            for (const animation of document.getAnimations()) {
              const layer = (animation.effect as KeyframeEffect | null)?.pseudoElement;
              if (layer) window.transitionLayers.push(layer);
            }
          })
          .catch(() => {});
        return transition;
      }) as typeof document.startViewTransition;
    });
    await page.goto('/');
    const card = page.locator('.featured-project.project-yellow');
    await card.scrollIntoViewIfNeeded();
    await card.click();
    await expect(page).toHaveURL(/\/work\/skilladder$/);
    await expect
      .poll(() => page.evaluate(() => window.transitionLayers))
      .toContain('::view-transition-group(brand-skilladder)');
  });

  test('pausing motion shows everything and survives a reload', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Pause motion' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'off');
    await expect(page.locator('.is-armed:not(.is-revealed)')).toHaveCount(0);
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'off');
    await expect(page.locator('.is-armed')).toHaveCount(0);
    await page.getByRole('button', { name: 'Play motion' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'on');
  });
});

test('reduced motion leaves every page in its final state', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced');
  await expect(page.locator('.motion-toggle')).toBeHidden();
  await scrollThrough(page);
  await expect(page.locator('.is-armed')).toHaveCount(0);
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('all content is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).not.toHaveAttribute('data-motion', /./);
    await expect(page.getByRole('heading', { name: 'Ideas are only the beginning.' })).toBeVisible();
    await expect(page.locator('.home-close > a')).toBeVisible();
    const hidden = await page.locator('[data-reveal], [data-enter], .word > span').evaluateAll((elements) =>
      elements.filter((element) => {
        const style = getComputedStyle(element);
        return Number(style.opacity) < 1 || !['none', 'matrix(1, 0, 0, 1, 0, 0)'].includes(style.transform);
      }).length,
    );
    expect(hidden).toBe(0);
  });
});

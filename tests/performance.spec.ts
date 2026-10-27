import { expect, test, type Page } from '@playwright/test';

declare global {
  interface Window {
    vitals: { lcp: number; cls: number };
  }
}

// Records Largest Contentful Paint and Cumulative Layout Shift from the
// start of the load, the way the browser reports them to field tools.
const observeVitals = (page: Page) =>
  page.addInitScript(() => {
    window.vitals = { lcp: 0, cls: 0 };
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) window.vitals.lcp = entry.startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
        if (!entry.hadRecentInput) window.vitals.cls += entry.value;
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });

const scrollThrough = (page: Page) =>
  page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      scrollTo({ top: y, behavior: 'instant' });
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 40)));
    }
  });

// Lab budgets at the "good" thresholds for Core Web Vitals, with motion on:
// entrances and reveals must not delay the main content or move the layout.
test.describe('with motion', () => {
  test.use({ reducedMotion: 'no-preference' });

  for (const route of ['/', '/work/skilladder', '/about', '/notes', '/contact']) {
    test(`${route} paints quickly and keeps its layout still`, async ({ page }) => {
      await observeVitals(page);
      // The live grader renders after the page loads; it must not move anything.
      await page.route('**/api/grade', (r) => r.fulfill({ json: { available: true } }));
      await page.goto(route, { waitUntil: 'networkidle' });
      await expect(page.locator('html')).toHaveAttribute('data-motion', 'on');
      // A visitor's first scroll ends LCP; a scripted one does not, so it is
      // read before scrolling.
      const lcp = await page.evaluate(() => window.vitals.lcp);
      expect(lcp).toBeGreaterThan(0);
      expect(lcp).toBeLessThan(2500);
      await scrollThrough(page);
      expect(await page.evaluate(() => window.vitals.cls)).toBeLessThan(0.1);
    });
  }
});

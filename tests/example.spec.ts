import { test, expect } from '@playwright/test';

test('Sample.test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.locator('#APjFqb').fill('Playwright'); // Wait for suggestions to load
});

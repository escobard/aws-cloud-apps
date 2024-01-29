// @ts-check
const { describe, test, expect } = require('@playwright/test');

describe('Notes landing page smoke tests', () => {
  test('user is able to see title - basic HTMl has loaded', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Notes/);
  });

  test('user is able to see new notes button - API & Database are available', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Expect a title "to contain" a substring.
    await expect(page.getByRole('button', { name: 'New note' })).toBeVisible();
  });

});

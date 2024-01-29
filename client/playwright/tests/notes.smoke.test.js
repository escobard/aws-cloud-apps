// @ts-check
const { describe, test, expect } = require('@playwright/test');

describe('Notes landing page smoke tests', () => {
  test('has title - basic HTMl has loaded', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Notes/);
  });

  test('has add notes button - API & Database have loaded', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Expect a title "to contain" a substring.
    await expect(page.getByRole('button', { name: 'Add note' })).toBeVisible();
  });

});

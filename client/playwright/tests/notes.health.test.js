const { describe, test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

describe('Notes landing page health tests', () => {
  test('user is able to add a note', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // select add note button - make async since button does not load immediately
    let newNoteButton = await page.getByRole('button', { name: 'New note' });
    // click add note button
    await newNoteButton.click()
    // select subject form field - make sync since modal does not load immediately
    let subjectInput = await page.getByLabel('Subject');
    // fill note form subject
    await subjectInput.fill('Test Note');
    // select description form field - make sync since modal is already open
    let descriptionInput = await page.getByLabel('Note *');
    // fill note form description
    await descriptionInput.fill('This is a test note with at least 25 characters');
    // select save note button - make sync since modal is already open
    let addNoteButton = await page.getByRole('button', { name: 'Add note' });
    // click save note button
    await addNoteButton.click()
    // expect note to be visible - .nth0 to select first note since multiple notes might be created by e2e tests
    let newNoteTitle = await page.getByText('Test Note').nth(0);
    let newNoteDescription = await page.getByText('This is a test note with at least 25 characters').nth(0);
    await expect(newNoteTitle).toBeVisible();
    await expect(newNoteDescription).toBeVisible();
  });
})
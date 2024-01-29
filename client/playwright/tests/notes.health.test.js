const { describe, test, expect } = require('@playwright/test');

const { NotesPage } = require('./page-objects/NotesPage');

test.beforeEach(async ({ page }) => {
  global.notesPage = new NotesPage(page);
});

describe('Notes landing page health tests', () => {
  test('user is able to add a note', async ({ page }) => {
    await notesPage.addNewNote()
  });
})
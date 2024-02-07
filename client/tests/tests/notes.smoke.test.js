// @ts-check
const { describe, test, expect } = require('@playwright/test');

const { NotesPage } = require('./page-objects/NotesPage');

test.beforeEach(async ({ page }) => {
  global.notesPage = new NotesPage(page);
});

describe('Notes landing page smoke tests', () => {
  test('user is able to see title - basic HTMl has loaded', async ({ page }) => {
    await notesPage.hasTitle()
  });

  test('user is able to see new notes button - API & Database are available', async ({ page }) => {
    // to debug network logs
    // page.on('response', response => console.log('<<', response.status(), response.url()));
    await notesPage.hasNewNoteButton()
  });

});

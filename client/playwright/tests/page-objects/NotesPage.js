const { expect } = require('@playwright/test');

class NotesPage {
  /**
   * @param {import('@playwright/test').Page} page
   * Assigns playwright's page object to this.page
   */
  constructor(page) {
    this.page = page;
  }

  // navigates to notes page
  async goto() {
    return await this.page.goto('http://ui:3000');
  }

  // validates that the notes page has the expected title
  async hasTitle( title= /Notes/ ){
    await this.goto()
    await expect(this.page).toHaveTitle(title);
  }

  // validates that the notes page has the new note button, validating that api and database are available
  async hasNewNoteButton(role='button', buttonName='New note'){
    await this.goto()
    await expect(this.page.getByRole(role, { name: buttonName })).toBeVisible();
  }

  // adds a new note to the notes page and validates that the new note is visible
  async addNewNote(
    newNoteButton='New note',
    addNoteButton='Add note',
    subject='Test Note',
    note='This is a test note with at least 25 characters')
  {
    await this.goto()
    await this.page.getByRole('button', { name: newNoteButton }).click()
    await this.page.getByLabel('Subject').fill(subject);
    await this.page.getByLabel('Note *').fill(note);
    await this.page.getByRole('button', { name: addNoteButton }).click()
    // expect note to be visible - .nth0 to select first note since multiple notes might be created by e2e tests
    await expect(this.page.getByText(subject).nth(0)).toBeVisible();
    await expect(this.page.getByText(note).nth(0)).toBeVisible();
  }

}

exports.NotesPage = NotesPage;
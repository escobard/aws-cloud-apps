const { expect } = require('@playwright/test');

class NotesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    return await this.page.goto('http://localhost:3000');
  }

  async hasTitle( title= /Notes/ ){
    await this.goto()
    await expect(this.page).toHaveTitle(title);
  }

  async hasNewNoteButton(role='button', buttonName='New note'){
    await this.goto()
    await expect(this.page.getByRole(role, { name: buttonName })).toBeVisible();
  }

}

exports.NotesPage = NotesPage;
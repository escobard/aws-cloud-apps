const { expect } = require('@playwright/test');

class NotesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  async constructor(page) {
    this.page = page;
    await this.goto();
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
  }

  async hasTitle( title= /Notes/ ){
    await expect(page).toHaveTitle(title);
  }

}

exports = {
  NotesPage
}
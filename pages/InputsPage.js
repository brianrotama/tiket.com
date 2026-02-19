import { BasePage } from './BasePage.js';
import { URLS } from './urls.js';

export class InputsPage extends BasePage {
  constructor(page) {
    super(page);
    this.numberInput = page.locator('input[type="number"]');
  }

  async goto() {
    await this.page.goto(URLS.INPUTS);
  }

  async fillNumber(value) {
    await this.fill(this.numberInput, String(value));
  }
}
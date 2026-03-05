import { BasePage } from './basePage.js';
import { URLS } from '../config/urls.js';

export class HomePage extends BasePage {

  constructor(page) {
    super(page);

    this.hotelMenu = page.locator('text=Hotel');

    this.destinationInput = page.locator('input[placeholder*="Kota"]');

    this.searchButton = page.locator('button:has-text("Cari Hotel")');

  }

  async gotoHome() {
    await this.goto(URLS.HOME);
  }

  async clickHotelMenu() {
    await this.hotelMenu.click();
  }

  async enterDestination(city) {
    await this.destinationInput.fill(city);
  }

  async clickSearch() {
    await this.searchButton.click();
  }

}
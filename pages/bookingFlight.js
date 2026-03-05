import { BasePage } from './basePage.js';

export class HotelSearchPage extends BasePage {

  constructor(page) {

    super(page);

    this.hotelList = page.locator('[data-testid="hotel-card"]');

  }

  async verifyHotelListVisible() {

    await this.hotelList.first().waitFor({ state: 'visible' });

  }

}
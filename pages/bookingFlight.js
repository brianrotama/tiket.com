import { BasePage } from './basePage.js';

export class BookingFlightPage extends BasePage {

  constructor(page) {

    super(page);

    this.flightResult = page.locator('[data-testid="flight-card"]');

  }

  async verifyFlightResultVisible() {

    await this.flightResult.first().waitFor({
      state: 'visible'
    });

  }

}
import { BasePage } from './basePage.js';
import { URLS } from '../config/urls.js';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {

  constructor(page) {
    super(page);

    this.page = page;

    this.flightTab = page.getByTestId('verticalTab-flight');

    this.oneWayTrip = page.getByTestId('verticalWidgetRenderer').getByText('One way');
    this.roundTrip = page.getByText('Round-trip', { exact: true });

    this.from = page.getByTestId('verticalWidgetRenderer').getByText('From');
    this.chipFromJakarta = page.locator('#modal-root').getByRole('button', { name: 'Jakarta', exact: true });

    this.to = page.getByTestId('verticalWidgetRenderer').getByText('To');
    this.chipToBali = page.getByRole('button', { name: 'Denpasar-Bali' });

    this.searchButton = page.getByRole('button', { name: 'Let’s Search' });
  }

  async gotoHome() {

    await this.goto(URLS.HOME);
  }

  async verifyFlightTabVisible() {
    await this.flightTab.waitFor({ state: 'visible' });
    await expect(this.flightTab).toBeVisible();
  }

  async clickOneWayTrip() {
    await this.oneWayTrip.waitFor({ state: 'visible' });
    await this.oneWayTrip.click();
  }

  async clickRoundTrip() {
    await this.roundTrip.waitFor({ state: 'visible' });
    await this.roundTrip.click();
  }

   async clickFrom() {
    await this.from.click();
  }

   async clickChipFromJakarta() {
    await this.chipFromJakarta.click();
  }

  async clickTo() {
    await this.to.click();
  }

   async clickChipToBali() {
    await this.chipToBali.click();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

}
import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';
import { selectFutureDate } from '../utils/dateHelper.js';

export class HomePage extends BasePage {

  constructor(page) {
    super(page);

    this.page = page;

    this.flightTab = page.locator('[data-testid="verticalTab-flight"]');

    this.oneWayTrip = page.getByTestId('verticalWidgetRenderer').getByText('Sekali jalan');
    this.roundTrip = page.getByText('Pulang-pergi', { exact: true });

    this.from = page.getByTestId('verticalWidgetRenderer').getByText('Dari');
    this.chipFromJakarta = page.locator('#modal-root').getByRole('button', { name: 'Jakarta', exact: true });

    this.to = page.getByText('Ke', { exact: true });
    this.chipToBali = page.getByRole('button', { name: 'Denpasar-Bali' });

    this.pax = page.getByText('Penumpang, Kelas');
    this.class = page.getByRole('button', { name: 'Ekonomi', exact: true });
    this.save = page.getByRole('button', { name: 'Simpan' });

    this.departureDate = page.getByText('Pergi', { exact: true });

    this.searchButton = page.getByRole('button', { name: 'Ayo Cari' });
  }

  async gotoHome() {
    await this.page.goto('/');
    await this.handleModalIfPresent();
  }

  async verifyFlightTabVisible() {
    await expect(this.flightTab).toBeVisible({
      timeout: 15000
    });
  }

  async clickOneWayTrip() {
    await this.oneWayTrip.click();
  }

  async clickRoundTrip() {
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

  async selectDepartureDate(monthOffset) {

    await this.departureDate.click();

    await selectFutureDate(this.page, monthOffset);

  }

  async clickPax() {
    await this.pax.click();
  }

  async clickClass() {
    await this.class.click();
  }

  async clickSave() {
    await this.save.click();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

}
import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';

export class SearchResultPage extends BasePage {

  constructor(page) {
    super(page);

    this.page = page;

    this.filter = page.getByRole('button', { name: 'Filter' }).first();

    this.flightCard = page.locator('.FlightCard_card_body_wrapper___1uCh').filter({has: page.getByText('AirAsia')}).first();

    this.filterMaskapai = page.getByRole('button', { name: 'Maskapai' });
    this.listFilterMaskapai = page.locator('label').filter({ hasText: 'AirAsia IndonesiaMulai dari IDR' });
    this.hasilPencarian = page.getByRole('button', { name: 'Hasil Pencarian' });
    this.pilihMaskapai = page.locator('.FlightCard_card_body_wrapper___1uCh').first();
    this.pilihBundlingMaskapai = page.getByRole('button', { name: 'Pilih' }).first();
    this.skipInsurance = page.getByTestId('popup-button-secondary');
  }

  async verifyFilterVisible() {
    await expect(this.filter).toBeVisible({
      timeout: 15000
    });
  }

  async clickFilterMaskapai() {
    await this.filterMaskapai.click();
  }

  async clickListFilterMaskapai() {
    await this.listFilterMaskapai.click();
  }

  async clickHasilPencarian() {
    await this.hasilPencarian.click();
  }

  async clickPilihMaskapai() {
    await this.flightCard.click();
  }

  async clickPilihBundlingMaskapai() {
    await this.pilihBundlingMaskapai.click();
  }

  async clickSkipInsurance() {
    await this.skipInsurance.click();
  }

}
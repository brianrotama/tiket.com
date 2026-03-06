import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';

export class PaymentPage extends BasePage {

  constructor(page) {
    super(page);

    this.page = page;

    this.titleMetodePembayaran = page.getByTestId('payment-method').getByText('Metode Pembayaran');
    this.openDetail = page.getByRole('button', { name: /order-summary-icon.*/ });
    this.ringkasanPesanan = page.getByRole('heading', { name: 'Ringkasan Pesanan' });
    this.detailAirline = page.getByText('AirAsia Indonesia');
    this.closeDetail = page.getByTestId('modal-close-button');

  }

  async verifyTitleMetodePembayaran() {
    await expect(this.titleMetodePembayaran).toBeVisible();
  }

  async clickOpenDetail() {
    await this.openDetail.click();
  }

  async verifyDetailTitleRingkasanPesanan() {
    await expect(this.ringkasanPesanan).toBeVisible();
  }

  async verifyDetailAirline() {
    await expect(this.detailAirline).toBeVisible();
  }

  async clickCloseDetail() {
    await this.closeDetail.click();
  }

}
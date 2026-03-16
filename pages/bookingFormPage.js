import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';

export class BookingFormPage extends BasePage {

  constructor(page) {
    super(page);

    this.page = page;

    this.titleDetailPemesan = page.getByRole('heading', { name: 'Detail Pemesan' });

    this.route = page.getByText('JakartaDenpasar-bali');
    this.airline = page.getByRole('img', { name: 'Airasia Indonesia' });
    this.openDetail = page.getByRole('button', { name: 'Detail' });
    this.detailRoute = page.getByRole('heading', { name: 'Jakarta ke Denpasar-bali' });
    this.detailAirline = page.getByText('Airasia Indonesia');
    this.closeDetail = page.getByTestId('modal-close-button');

    this.salutation = page.getByText('Tuan').first();
    this.pilihNama = page.getByText('Nama LengkapNama Lengkap').first();
    this.inputNama = page.getByRole('textbox', { name: 'Nama Lengkap Nama Lengkap' });
    this.inputNo = page.getByRole('textbox', { name: 'Nomor Telepon' });
    this.pilihEmail = page.getByText('Alamat EmailAlamat Email');
    this.inputEmail = page.getByRole('textbox', { name: 'Alamat Email' });
    this.pilihSamaDenganPemesan = page.locator('.Toggle_knob__RlHWB');
    this.dobField = page.getByLabel('Tanggal Lahir');
    this.saveButton = page.getByRole('button', { name: 'Simpan' });
    this.pilihWn = page.getByRole('button').nth(4);
    this.pilihId = page.getByText('Indonesia');
    this.cancelInsurance = page.getByRole('button', { name: 'icon Batalkan' });
    this.lanjutBayar = page.getByRole('button', { name: 'Lanjut Bayar' });
    this.confirmLanjutBayar = page.locator('#modal-root').getByRole('button', { name: 'Lanjut Bayar' });
    this.confirmLanjutBayar2 = page.getByRole('button', { name: 'Lanjut ke pembayaran' });

  }

  async verifyTitleDetailPemesan() {
    await expect(this.titleDetailPemesan).toBeVisible();
  }

  async verifyRoute() {
    await expect(this.route).toBeVisible();
  }

  async verifyAirline() {
    await expect(this.airline).toBeVisible();
  }

  async clickOpenDetail() {
    await this.openDetail.click();
  }

  async verifyDetailRoute() {
    await expect(this.detailRoute).toBeVisible();
  }

  async verifyDetailAirline() {
    await expect(this.detailAirline).toBeVisible();
  }

  async clickCloseDetail() {
    await this.closeDetail.click();
  }

  async clickSalutation() {
    await this.salutation.click();
  }

  async clickNama() {
    await this.pilihNama.click();
  }

  async clickInputNama(nama) {
    await this.inputNama.fill(nama);
  }

  async clickNo() {
    await this.inputNo.click();
  }

  async clickInputNo(no) {
    await this.inputNo.fill(no);
  }

  async clickEmail() {
    await this.pilihEmail.click();
  }
  
  async clickInputEmail(email) {
    await this.inputEmail.fill(email);
  }

  async clickSamaDenganPemesan() {
    await this.pilihSamaDenganPemesan.click();
  }

  async clickPilihDob() {
    await this.pilihDob.click();
  }

  async clickPilihWn() {
    await this.pilihWn.click();
  }

  async clickDropdownId() {
    await this.pilihId.click();
  }

  async clickCancelInsurance() {
    await this.cancelInsurance.click();
  }

  async clickLanjutBayar() {
    await this.lanjutBayar.click();
  }

async clickConfirmLanjutBayar() {
  try {
    await this.confirmLanjutBayar.waitFor({ state: 'visible', timeout: 3000 });
    await this.confirmLanjutBayar.click();
    console.log('Button Lanjut Bayar Found, then Click');
  } catch {
    console.log('Button Lanjut Bayar Not Found, then Skip');
  }
}

async clickConfirmLanjutBayar2() {
  try {
    await this.confirmLanjutBayar2.waitFor({ state: 'visible', timeout: 3000 });
    await this.confirmLanjutBayar2.click();
    console.log('Button Lanjut ke pembayaran Found, then Click');
  } catch {
    console.log('Button Lanjut ke pembayaran Not Found, then Skip');
  }
}

  async selectDOB(year, month, day) {
    await this.dobField.click();
    await this.page.getByRole('button', { name: /\d{4}/ }).first().click();
    await this.page.getByRole('button', { name: String(year) }).click();
    await this.page.getByRole('button', { name: /^[A-Za-z]{3}$/ }).first().click();
    await this.page.getByRole('button', { name: month }).click();
    await this.page.getByRole('button', {name: new RegExp(`^${day} ${month} ${year}`)}).click();
    await this.saveButton.click();

}

}
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage.js';
import { SearchResultPage } from '../../pages/searchResultPage.js';
import { BookingFormPage } from '../../pages/bookingFormPage.js';
import { PaymentPage } from '../../pages/paymentPage.js';

test.describe('Flight Search Test', () => {

  test('User can search flight Jakarta to Bali', async ({ page }) => {

    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const bookingFormPage = new BookingFormPage(page);
    const paymentPage = new PaymentPage(page);

    await homePage.gotoHome();
    await homePage.verifyFlightTabVisible();
    await homePage.clickOneWayTrip();

    await homePage.clickFrom();
    await homePage.clickChipFromJakarta();

    await homePage.clickTo();
    await homePage.clickChipToBali();

    await homePage.selectDepartureDate(3);

    await homePage.clickPax();
    await homePage.clickClass();
    await homePage.clickSave();

    await homePage.clickSearch();

    await searchResultPage.verifyFilterVisible();

    await searchResultPage.clickFilterMaskapai();
    await searchResultPage.clickListFilterMaskapai();
    await searchResultPage.clickHasilPencarian();
    await searchResultPage.clickPilihMaskapai();
    await searchResultPage.clickPilihBundlingMaskapai();
    await searchResultPage.clickSkipInsurance();

    await bookingFormPage.verifyRoute();
    await bookingFormPage.verifyAirline();
    await bookingFormPage.clickOpenDetail();
    await bookingFormPage.verifyDetailRoute();
    await bookingFormPage.verifyDetailAirline();
    await bookingFormPage.clickCloseDetail();

    await bookingFormPage.clickSalutation();
    await bookingFormPage.clickNama();
    await bookingFormPage.clickInputNama('Brian Rotama Putra');
    await bookingFormPage.clickInputNo('81807515575');
    await bookingFormPage.clickEmail();
    await bookingFormPage.clickInputEmail('brian.mbee@gmail.com');
    await bookingFormPage.clickSamaDenganPemesan();
    await bookingFormPage.selectDOB(1993, 'Juli', 11);
    await bookingFormPage.clickPilihWn();
    await bookingFormPage.clickDropdownId();
    await bookingFormPage.clickCancelInsurance();
    await bookingFormPage.clickLanjutBayar();
    await bookingFormPage.clickConfirmLanjutBayar();
    await bookingFormPage.clickConfirmLanjutBayar2();

    await page.waitForURL('**/payment**', { timeout: 15000 });
    await paymentPage.verifyTitleMetodePembayaran();
    await paymentPage.clickOpenDetail();
    await paymentPage.verifyDetailTitleRingkasanPesanan();
    await paymentPage.verifyDetailAirline();
    await paymentPage.clickCloseDetail();

  });

});
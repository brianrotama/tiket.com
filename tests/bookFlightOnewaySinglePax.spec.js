import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { SearchResultPage } from '../pages/searchResultPage.js';
import { selectFutureDate } from '../utils/dateHelper.js';

test.describe('Flight Search Test', () => {

  test('User can search flight Jakarta to Bali', async ({ page }) => {

    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);

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
        

  });

});
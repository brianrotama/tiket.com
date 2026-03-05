import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage.js';
import { HotelSearchPage } from '../pages/bookingFlight.js';

import { hotelData } from '../fixtures/testData.js';


test.describe('Flight Search Test', () => {

  test('User can search flight in Bandung', async ({ page }) => {

    const homePage = new HomePage(page);
    const hotelSearchPage = new HotelSearchPage(page);

    // open homepage
    await homePage.gotoHome();

    // click hotel tab
    await homePage.clickHotelMenu();

    // input city
    await homePage.enterDestination(hotelData.city);

    // click search
    await homePage.clickSearch();

    // verify result
    await hotelSearchPage.verifyHotelListVisible();

  });

});
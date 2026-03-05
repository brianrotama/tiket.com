import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test.describe('Flight Search Test', () => {

  test('User can search flight Jakarta to Bali', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.gotoHome();

    await homePage.verifyFlightTabVisible();

    await homePage.clickOneWayTrip();

    await homePage.clickFrom();

    await homePage.clickChipFromJakarta();

    await homePage.clickTo();

    await homePage.clickChipToBali();

    await homePage.clickSearch();

  });

});
import { chromium } from '@playwright/test';

(async () => {

  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.traveloka.com/id-id');

  console.log('Solve captcha manually if it appears...');

  // kasih waktu solve captcha
  await page.waitForTimeout(30000);

  await context.storageState({
    path: 'auth.json'
  });

  console.log('Session saved to auth.json');

  await browser.close();

})();
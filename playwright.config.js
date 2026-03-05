import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const ENV = process.env.ENV || 'staging';
dotenv.config({
  path: `.env.${ENV}`
});

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['list'],
    ['html']
  ],

  use: {

    baseURL: process.env.BASE_URL,

    headless: false,

    slowMo: 200,

    viewport: { width: 1280, height: 720 },

    screenshot: 'only-on-failure',

    video: 'on',

    trace: 'on-first-retry',

    // locale supaya tidak redirect ke en-id
    locale: 'id-ID',

    // optional tapi bagus untuk site regional
    timezoneId: 'Asia/Jakarta',

    // hanya dipakai kalau file benar-benar ada
    // storageState: '.storage/auth.json',

  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ]

});
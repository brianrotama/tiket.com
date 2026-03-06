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

    baseURL: process.env.UI_BASE_URL || 'https://www.tiket.com/id-id',
    headless: process.env.CI ? true : false,
    slowMo: process.env.CI ? 0 : 200,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    locale: 'id-ID',
    permissions: []

  },

  projects: [
  {
    name: 'ui',
    testDir: './tests/ui',
    use: {
      baseURL: process.env.UI_BASE_URL
    },
  },
  {
    name: 'api',
    testDir: './tests/api',
    use: {
      baseURL: process.env.API_BASE_URL
    }
  },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // }

  ]

});

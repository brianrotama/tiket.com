import { defineConfig, devices } from '@playwright/test';

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

    baseURL: 'https://www.tiket.com',

    headless: false,

    viewport: { width: 1280, height: 720 },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

  ]

});
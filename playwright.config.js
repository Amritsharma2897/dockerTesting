// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './t',
  snapshotPathTemplate: "t/{arg}.png",
  timeout:60000,
  expect:
  {
    timeout:30000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['list']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: "on",
    video: "on",
  },
  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/gmail-auth.json',
      channel: 'chrome' },
      dependencies: ['setup'],
    },
    // {
    //   name: 'gmail',
    //   use: {
    //     storageState: 'playwright/.auth/gmail-auth.json',
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome']},
    // },

    // {
    //   name: 'iPad_View_Safari',
    //   use: 
    //   { ...devices['iPad Pro'],
    //   storageState: 'playwright/.auth/gmail-auth.json',
    //   },
    //   dependencies: ['setup'],
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: 
    //   { ...devices['Pixel 5'],
    //   storageState: 'playwright/.auth/gmail-auth.json',
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],

  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});



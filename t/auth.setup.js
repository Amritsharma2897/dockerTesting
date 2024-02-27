// tests/auth.setup.js
const { test, expect } = require('@playwright/test');

test('authenticate', async ({ page }) => {
  // Navigate to Gmail login page
  await page.goto('https://mail.google.com');

  // Fill in the email address and proceed
  await page.waitForSelector('input[type="email"]');
  await page.fill('input[type="email"]', 'testng46@gmail.com');
  await page.click('div[id="identifierNext"]');

  // Wait for the password input field and fill in the password
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', 'Test&1234');
  await page.click('div[id="passwordNext"]');

  // Wait for login to complete
  await page.waitForNavigation("load");

  // Save authentication state
  await page.context().storageState({ path: 'playwright/.auth/gmail-auth.json' });
});

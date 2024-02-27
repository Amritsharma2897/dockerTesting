// tests/auth.setup.js
const { test, expect } = require('@playwright/test');

test('authenticate', async ({ page }) => {
  // Navigate to Gmail login page
  await page.goto('https://mail.google.com');

  // Fill in the email address and proceed
  await page.waitForSelector('input[type="email"]');
  await page.fill('input[type="email"]', 'testng46@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  // Wait for the password input field and fill in the password
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', 'Test&1234');
  await page.getByRole('button', { name: 'Next' }).click();
//   const currentURL = await page.url();
//   expect(currentURL).toContain("inbox");

  // Wait for login to complete
  await page.waitForNavigation("domcontentloaded");

  // Save authentication state
  await page.context().storageState({ path: 'playwright/.auth/gmail-auth.json' });




//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByLabel('Enter your password').fill('Test&1234');
//   await page.getByLabel('Enter your password').press('Enter');
//   await page.goto('https://mail.google.com/mail/u/0/');
//   await page.goto('https://mail.google.com/mail/u/0/#inbox');

  
  
  
  

});

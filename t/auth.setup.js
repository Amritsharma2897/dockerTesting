//tests/auth.setup.js
const { test, expect } = require('@playwright/test');
test('authenticate', async ({ page }) => {
  // Navigate to Gmail login page
  await page.goto('https://mail.google.com');

  // Fill in the email address and proceed
  await page.waitForSelector('input[type="email"]');
  await page.fill('input[type="email"]', 'tengineer@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByLabel('Try again')).toBeVisible();
  await page.getByLabel('Try again').click();
  // await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('tengineer456@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('Test&12345');
  await page.getByRole('button', { name: 'Next' }).click();

  // Wait for the password input field and fill in the password
  // await page.waitForSelector('input[type="password"]');
  // await page.fill('input[type="password"]', 'Test&12345');
  // await page.getByRole('button', { name: 'Next' }).click();
 //   const currentURL = await page.url();
 //   expect(currentURL).toContain("inbox");
 await page.waitForURL("https://mail.google.com/mail/u/0/#inbox");

 //   Wait for login to complete
 await page.waitForLoadState('domcontentloaded');
 // await page.waitForNavigation("domcontentloaded");

  // Save authentication state
  await page.context().storageState({ path: 'playwright/.auth/gmail-auth.json' });
  await page.waitForTimeout(2000);
});

// const { test: setup } = require('@playwright/test');

// const authFile = 'playwright/.auth/gmail-auth.json';

// setup('authenticate', async ({ request }) => {
//   // Send authentication request to Gmail. Replace with your own.
//   await request.post('https://accounts.google.com/signin/v2/identifier', {
//     form: {
//       'identifier': 'testng46@gmail.com', // Replace with your Gmail email address
//       'password': 'Test&1234', // Replace with your Gmail password
//     }
//   });
//   await request.storageState({ path: authFile });
// });



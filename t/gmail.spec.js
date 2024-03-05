// tests/gmail.spec.js
const { test, expect } = require('@playwright/test');

test('Gmail login', async ({ page }) => {
//   // Check if the user is logged in
await page.goto('https://mail.google.com');

// await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
// await page.getByRole('link', { name: 'Sign in' }).click();

// await page.waitForSelector('input[type="email"]');
// await page.fill('input[type="email"]', 'tengineer456@gmail.com');
// await page.getByRole('button', { name: 'Next' }).click();
// // Wait for the password input field and fill in the password
// await page.waitForSelector('input[type="password"]');
// await page.fill('input[type="password"]', 'Test&12345');
// await page.getByRole('button', { name: 'Next' }).click();

await expect (page.getByRole('button', { name: 'More labels' })).toBeVisible();
await page.getByRole('button', { name: 'More labels' }).click();
await expect(page.getByLabel('All Mail')).toBeVisible();
await page.getByLabel('All Mail').click();
// await expect(page.getByRole('link', { name: 'Inbox Security alert - Your' })).toBeVisible();
// await page.getByRole('link', { name: 'Inbox Security alert - Your' }).click();
});


// const { test, expect } = require('@playwright/test');

// test('Gmail login', async ({ browser }) => {
//   const context = await browser.newContext({
//     storageState: 'playwright/.auth/gmail-auth.json' // Path to the stored authentication state
//   });
//   const page = await context.newPage();

//   await page.goto('https://mail.google.com');

//   // Your test assertions for Gmail login
//   // For example, you can check for specific elements to ensure successful login.

//   await context.close();
// });

// gmail-login.test.js

// const { test, expect, chromium } = require('@playwright/test');

// test('Gmail Login', async ({ browser }) => {
//   // Launch a browser context
//   const context = await browser.newContext({
//     storageState: 'playwright/.auth/gmail-auth.json' // Path to the stored authentication state
//   });

//   // Create a new page in the context
//   const page = await context.newPage();

//   // Navigate to Gmail
//   await page.goto('https://mail.google.com');

//   // Ensure that we are on the Gmail inbox page
//   await expect(page).toHaveURL('https://mail.google.com/mail/u/0/#inbox');

//   // Perform further actions on Gmail as needed
//   // For example, you can interact with emails, compose new emails, etc.

//   // Close the browser context
//   await context.close();
// });



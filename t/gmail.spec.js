// tests/gmail.spec.js
const { test, expect } = require('@playwright/test');

test('Gmail login', async ({ page }) => {
//   // Check if the user is logged in
await page.goto('https://mail.google.com');

await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
await page.getByRole('link', { name: 'Sign in' }).click();

await page.waitForSelector('input[type="email"]');
await page.fill('input[type="email"]', 'testng46@gmail.com');
await page.getByRole('button', { name: 'Next' }).click();
// Wait for the password input field and fill in the password
await page.waitForSelector('input[type="password"]');
await page.fill('input[type="password"]', 'Test&1234');
await page.getByRole('button', { name: 'Next' }).click();

await expect (page.getByRole('button', { name: 'More labels' })).toBeVisible();
await page.getByRole('button', { name: 'More labels' }).click();
await expect(page.getByLabel('All Mail')).toBeVisible();
await page.getByLabel('All Mail').click();
await expect(page.getByRole('link', { name: 'Inbox Security alert - Your' })).toBeVisible();
await page.getByRole('link', { name: 'Inbox Security alert - Your' }).click();
});

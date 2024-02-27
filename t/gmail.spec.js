// tests/gmail.spec.js
const { test, expect } = require('@playwright/test');

test('Gmail login', async ({ page }) => {
//   // Check if the user is logged in
await page.goto('https://mail.google.com');
await expect (page.getByRole('button', { name: 'More labels' })).toBeVisible();
await page.getByRole('button', { name: 'More labels' }).click();
await expect(page.getByLabel('All Mail')).toBeVisible();
await page.getByLabel('All Mail').click();
await expect(page.getByRole('link', { name: 'Inbox Security alert - Your' })).toBeVisible();
await page.getByRole('link', { name: 'Inbox Security alert - Your' }).click();
});

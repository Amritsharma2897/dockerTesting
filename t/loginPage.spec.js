const { test, expect } = require('@playwright/test');

test('Login orrange hrm application', async ({ page }) => {
    await page.goto('/'+'web/index.php/auth/login'); // Template literal

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.USER_NAME);
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
    await expect(page.getByRole('button',{name: ' Login '})).toBeVisible();
    await page.getByRole('button',{name: ' Login '}).click();
})

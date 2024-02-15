// @ts-check
const { test, expect } = require('@playwright/test');
const {toHaveScreenshotWithoutPlatform} = require('./helperCode');

// expect.extend({
//   async toHaveScreenshot(page, testInfo, snapshotName) {
//     const snapshotDir = './t'; // Replace with your desired path
//     const testFileRelativePath = page.testInfo.testPath.replace(/\.[^.]+$/, '');
    
//     // Remove the platform suffix from the snapshotName
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32)/, '');

//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
//     await page.screenshot({ path: snapshotPath });

//     // Return a MatcherResult object
//     return {
//       message: () => `Expected page to have screenshot without platform suffix`,
//       pass: true, // You might adjust this based on your conditions
//     };
//   },
// });

test('get started link', async ({ page}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.click('text=Get started');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('h1')).toBeVisible();

  // Use the helper function to take a screenshot without platform suffix
  await toHaveScreenshotWithoutPlatform(page,'t\example.spec.js-snapshots','get-started-link.png');
});
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'Installation' })).toHaveScreenshot(`get-started-link.png`);

// });



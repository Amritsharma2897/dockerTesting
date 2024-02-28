// tests/auth.setup.js
// const { test, expect } = require('@playwright/test');
// test('authenticate', async ({ page }) => {
//   // Navigate to Gmail login page
//   await page.goto('https://mail.google.com');

  // // Fill in the email address and proceed
  // await page.waitForSelector('input[type="email"]');
  // await page.fill('input[type="email"]', 'testng46@gmail.com');
  // await page.getByRole('button', { name: 'Next' }).click();

  // // Wait for the password input field and fill in the password
  // await page.waitForSelector('input[type="password"]');
  // await page.fill('input[type="password"]', 'Test&1234');
  // await page.getByRole('button', { name: 'Next' }).click();
//  //   const currentURL = await page.url();
//  //   expect(currentURL).toContain("inbox");
//  await page.waitForURL("https://mail.google.com/mail/u/0/#inbox");

//  //   Wait for login to complete
//  await page.waitForLoadState('domcontentloaded');
//  // await page.waitForNavigation("domcontentloaded");

//   // Save authentication state
//   await page.context().storageState({ path: 'playwright/.auth/gmail-auth.json' });
//   await page.waitForTimeout(2000);
// });

// // tests/auth.setup.js
// const { test: setup } = require('@playwright/test');

// const authFile = 'playwright/.auth/user.json';

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



// gmail-auth.setup.js

const { test: baseTest, request } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

module.exports = {
  ...require('@playwright/test'),
  test: baseTest.extend({}, { workerStorageState: string => string }),

  workerStorageState: [
    async ({ test }, use) => {
      const id = test.info().parallelIndex;
      const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);

      if (fs.existsSync(fileName)) {
        await use(fileName);
        return;
      }

      const page = await request.newContext({ storageState: undefined });

      // Replace the following code with Gmail authentication logic
      await page.goto('https://accounts.google.com/signin/v2/identifier');
      await page.fill('input[type="email"]', 'testng46@gmail.com'); // Replace with your Gmail email address
      await page.click('div[id="identifierNext"]');
      await page.waitForSelector('input[type="password"]');
      await page.fill('input[type="password"]', 'Test&1234'); // Replace with your Gmail password
      await page.click('div[id="passwordNext"]');
      
      // Wait for the authentication process to complete
      await page.waitForLoadState('networkidle');

      await page.storageState({ path: fileName });
      await page.close();
      await use(fileName);
    },
    { scope: 'worker' }
  ]
};


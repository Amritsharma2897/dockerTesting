// async function takeScreenshotWithoutPlatform(page, snapshotName, snapshotDir = './t') {
//     const testFileRelativePath = page.testInfo.testPath.replace(/\.[^.]+$/, '');
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32)/, '');
//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
//     await page.screenshot({ path: snapshotPath });
//   }
  
// customMatchers.js

// async function toHaveScreenshotWithoutPlatform(page, testFilePath, snapshotName, snapshotDir = './t') {
//     const testFileRelativePath = testFilePath.replace(/\.[^.]+$/, '');
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32|mac|android|ios)/, '');
//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
//     await page.screenshot({ path: snapshotPath });
//     return snapshotPath;
//   }
  
//   module.exports = { toHaveScreenshotWithoutPlatform };

// async function toHaveScreenshotWithoutPlatform(page, testFilePath, snapshotName, platform, snapshotDir = './t') {
//     const testFileRelativePath = testFilePath.replace(/\.[^.]+$/, '');
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32|mac|android|ios)/, '');
//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${snapshotName}-${platform}.png`;
//     await page.screenshot({ path: snapshotPath });
//     return snapshotPath;
//   }

// async function toHaveScreenshotWithoutPlatform(receiver, snapshotName, snapshotDir = './t') 
//   {
//     const testFileRelativePath = receiver.testInfo.testPath.replace(/\.[^.]+$/, '');
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32|mac|android|ios)/, '');
//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
//     await receiver.screenshot({ path: snapshotPath });

//     // Validate the screenshot directly
//     return expect(snapshotPath).toMatchSnapshot(); // Assert the screenshot
//   }
//   module.exports = { toHaveScreenshotWithoutPlatform };
  
// async function takeScreenshotWithoutPlatform(page, snapshotName, snapshotDir = './t') {
//     const testFileRelativePath = page.testInfo.testPath.replace(/\.[^.]+$/, '');
//     const cleanSnapshotName = snapshotName.replace(/-(linux|win32)/, '');
//     const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
//     await page.screenshot({ path: snapshotPath });
//   }
  
// customMatchers.js

async function toHaveScreenshotWithoutPlatform(page, testFilePath, snapshotName, snapshotDir = './t') {
    const testFileRelativePath = testFilePath.replace(/\.[^.]+$/, '');
    const cleanSnapshotName = snapshotName.replace(/-(linux|win32|mac|android|ios)/, '');
    const snapshotPath = `${snapshotDir}/${testFileRelativePath}-${cleanSnapshotName}.png`;
    await page.screenshot({ path: snapshotPath });
  }
  
  module.exports = { toHaveScreenshotWithoutPlatform };
  
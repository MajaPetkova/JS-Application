const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

describe("Tests", async function () {
  this.timeout(5000);

  let page, browser;

  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });
  after(async () => {
    await page.close();
  });
  it("works", async () => {
//  await (new Promise (res => setTimeout(res, 2000)))
// expect(1).to.equal(1)
   await page.goto('http://localhost:5501');
   await page.screenshot({path:'page.png'})
  });
});

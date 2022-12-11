const { chromium, request } = require("playwright-chromium");
const { expect } = require("chai");

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};

function json(data) {
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

describe("Tests", async function () {
  // this.timeout(5000);

  let page, browser;

  before(async () => {
    browser = await chromium.launch({ headless: false });
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
  //   it("works", async () => {
  // //  await (new Promise (res => setTimeout(res, 2000)))
  // // expect(1).to.equal(1)
  //    await page.goto('http://localhost:5501/07.Architecture and Testing');
  //    await page.screenshot({path:'page.png'})
  //   });

  it("loads and displays all books", async () => {
    await page.route("**/jsonstore/collections/books", (route, request) => {
      route.fulfill(json(mockData));
    });
    await page.goto("http://localhost:5501/07.Architecture and Testing");
    await page.click("text=LOAD ALL BOOKS");
    await page.waitForSelector("text=Harry Potter");
    const rows = await page.$$eval("tr", (rows) =>
      rows.map((r) => r.textContent.trim())
    );
    // console.log(rows);

    expect(rows[1]).to.contains("Harry Potter");
    expect(rows[1]).to.contains("Rowling");
    expect(rows[2]).to.contains("Fundamentals");
    expect(rows[2]).to.contains("Svetlin");
  });
  it("can create book", async () => {
    await page.goto("http://localhost:5501/07.Architecture and Testing");
    await page.fill('form#createForm >> input[name="title"]', "Title");
    await page.fill('form#createForm >> input[name="author"]', "Petre Prlicko");

    // await page.waitForTimeout(60000)
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click("form#createForm >> text=Submit"),
    ]);
    console.log(request);
  });
});

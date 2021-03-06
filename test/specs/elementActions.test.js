internetPage = require("../../pages/internet.page");
loginData = require("../../data/loginData");

describe("Test element actions", () => {
  it("Should click element", () => {
    browser.url("/");
    internetPage.clickOnLink();
    expect(browser.getUrl()).equals(
      "https://the-internet.herokuapp.com/abtest"
    );
  });

  it("Should get Text", () => {
    browser.url("/");
    expect(internetPage.getSpecificElementText(1)).equals("A/B Testing");
  });

  it("Should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.getCheckboxes(1).isSelected()).equals(true);
  });

  it("Should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.getCheckboxes(1).isSelected()).equals(false);
  });

  it("Should login", () => {
    browser.url(`${browser.options.baseUrl}/login`);
    internetPage.enterUsername(loginData.userName);
    assert.equal(loginData.userName, internetPage.username.getValue());
    internetPage.enterPassword(loginData.password);
    assert.equal(loginData.password, internetPage.password.getValue());
  });

  it("Should clear Login", () => {
    internetPage.username.click();
    internetPage.username.clearValue();
    assert.equal("", internetPage.username.getValue());
    internetPage.password.click();
    internetPage.password.clearValue();
    assert.equal("", internetPage.password.getValue());
  });
});

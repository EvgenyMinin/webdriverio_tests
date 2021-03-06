class Internet {
  get pageHeader() {
    return $("h1.heading");
  }

  get subHeading() {
    return $("h2");
  }

  get h3ItemHeader() {
    return $("h3");
  }

  get pageFooter() {
    return $("#page-footer");
  }

  get parent() {
    return $("ul");
  }

  get childElements() {
    return this.parent.$$("li");
  }

  get firstLink() {
    return $("ul li:nth-child(1) a");
  }

  get username() {
    return $("#username");
  }

  get password() {
    return $("#password");
  }

  get inputTarget() {
    return $(".example form input#target");
  }

  get keyResult() {
    return $(".example #result");
  }

  get hereLink() {
    return $(".example a");
  }

  get iframe() {
    return $("#mceu_27 #mce_0_ifr");
  }

  get iframeBody() {
    return $("#tinymce");
  }

  get draggable() {
    return $("#draggable");
  }

  get droppable() {
    return $("#droppable");
  }

  get droppableParagraph() {
    return $("#droppable p");
  }

  get dropdownMenu() {
    return $("#dropdown");
  }

  get dropdownMenuOption1() {
    return $("#dropdown option:nth-child(2)");
  }

  get dropdownMenuOption2() {
    return $("#dropdown option:nth-child(3)");
  }

  get enableButton() {
    return $("#input-example button");
  }

  get inputEnabledField() {
    return $("#input-example input");
  }

  get addElementButton() {
    return $(".example button");
  }

  get pageButton() {
    return $("#checkbox-example button");
  }

  deleteButton(index) {
    return $(`#elements button:nth-child(${index})`);
  }

  alertButton(index) {
    return $(`.example li:nth-child(${index}) button`);
  }

  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`);
  }

  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`);
  }

  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  getLiText() {
    this.childElements.filter((element) => {
      console.log(element.getText());
    });
  }

  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  getCheckboxes(index) {
    console.log(index);
    return $(`#checkboxes input:nth-child(${index})`);
  }

  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    this.h3ItemHeader.waitForDisplayed();
    browser.pause(1000);
  }

  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
    browser.pause(1000);
  }

  clickCheckbox(index) {
    this.getCheckboxes(index).waitForDisplayed();
    this.getCheckboxes(index).click();
    browser.pause(1000);
  }

  /**
   * Enter the username into the field
   * @param {String} value username to be entered
   */
  enterUsername(value) {
    this.username.waitForDisplayed();
    this.username.setValue(value);
    browser.pause(1000);
  }

  /**
   * Enter the password into the field
   * @param {String} value password to be entered
   */
  enterPassword(value) {
    this.password.waitForDisplayed();
    this.password.setValue(value);
    browser.pause(1000);
  }

  /**
   * Hovers over the specified image
   * @param {Number} index the specific index of the image
   */

  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed();
    this.figures(index).moveTo(1, 1);
  }

  /**
   * Return the text of the figure details
   * @param {Number} index of the element
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

  /**
   * Click the target input field
   */
  clickInputTarget() {
    this.inputTarget.waitForDisplayed();
    this.inputTarget.click();
  }

  /**
   * Send keyboard keys to Target
   * @param {String} text The keyboard text to enter
   */
  sendKeysToTarget(text) {
    this.inputTarget.waitForDisplayed();
    this.inputTarget.keys(text);
    browser.pause(1000);
  }

  getResultText() {
    this.keyResult.waitForDisplayed();
    return this.keyResult.getText();
  }

  /**
   * CLick the "click here" link
   */
  clickHereLink() {
    this.hereLink.waitForDisplayed();
    this.hereLink.click();
  }

  /**
   * Enter text in the iframe
   * @param {String} text the text to be entered
   */
  sendTextToBody(text) {
    this.iframeBody.waitForDisplayed();
    this.iframeBody.clearValue();
    this.iframeBody.click();
    this.iframeBody.keys(text);
  }

  dragDraggableToDroppable() {
    this.draggable.waitForDisplayed();
    this.draggable.dragAndDrop(this.droppable);
  }

  clickDropdownMenu() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.click();
    browser.pause(1000);
  }

  clickDropdownMenuOption1() {
    this.dropdownMenuOption1.waitForDisplayed();
    this.dropdownMenuOption1.click();
    browser.pause(1000);
  }

  clickDropdownMenuOption2() {
    this.dropdownMenuOption2.waitForDisplayed();
    this.dropdownMenuOption2.click();
    browser.pause(1000);
  }

  /**
   * Click the specified javascript alert
   * @param {Number} index the index of the element
   */
  clickAlertButton(index) {
    this.alertButton(index).waitForDisplayed();
    this.alertButton(index).click();
  }

  clickEnableButton() {
    this.enableButton.waitForDisplayed();
    this.enableButton.click();
  }

  clickAddElementButton() {
    this.addElementButton.waitForDisplayed();
    this.addElementButton.click();
  }

  clickDeleteButton(index) {
    this.deleteButton(index).waitForDisplayed();
    this.deleteButton(index).click();
  }

  clickPageButton() {
    this.pageButton.waitForDisplayed();
    this.pageButton.click();
  }
}

module.exports = new Internet();

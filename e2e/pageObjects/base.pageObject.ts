import { browser, by, element } from 'protractor';

export class BasePageObject {

  goToYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://yandex.by/');
  }

  async pressEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
}

export const basePO = new BasePageObject();

import {browser, by, element, protractor} from 'protractor';

export class BasePageObject {

  goToYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://yandex.by/');
  }

  goToMobileMarketYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://market.yandex.by/catalog/54726/list?onstock=1&local-offers-first=0');
  }

  async pressEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
}

export const basePO = new BasePageObject();

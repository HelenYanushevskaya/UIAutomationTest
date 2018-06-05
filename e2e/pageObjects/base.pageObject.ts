import {browser, by, element, ElementFinder, protractor} from 'protractor';

export class BasePageObject {

  goToYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://yandex.by/');
  }

  goToMobileMarketYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://market.yandex.by/catalog/54726/list?onstock=1&local-offers-first=0');
  }
}

export const basePO = new BasePageObject();

import {by, element, browser, ElementFinder, ElementArrayFinder} from 'protractor';
import {waitFor, waitForClickable} from "../utils/helpers";

export class MarketPageObject {

  get xiaomi(): ElementFinder  {
    return element.all(by.className('NVoaOvqe58 _1gAodJU0Dw')).get(5);
  }

  get storeRating1(): ElementFinder {
    return element.all(by.className('_2zRi9ex2Rl')).get(2);
  }

  get headerSearch(): ElementFinder {
    return element(by.css('input#header-search'));
  }

  get searchSuggest(): ElementArrayFinder{
    return element.all(by.css('.suggest2-rich-item_js_inited'));
  }

  get searchSuggest2Content(): ElementFinder {
    return element(by.css('suggest2__content'));
  }

}

export const marketPO = new MarketPageObject();

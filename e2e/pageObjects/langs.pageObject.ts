import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {helpers} from "../utils/helpers";

export class LangsPageObject{

  get buttonLangs(): ElementFinder  {
    return element(by.css('button[class*="select__button"]'));
  }

  get englishLangs(): ElementFinder  {
    return element(by.cssContainingText(".select__text", "English"));
  }

  get buttonSaveLangs(): ElementFinder  {
    return element(by.className('button form__save button_theme_action button_size_m i-bem button_js_inited'));
  }

  get optionsHeader(): ElementFinder  {
    return element(by.className('options__header'));
  }

  async changeLangsOnEnglish() {
    await helpers.waitAndClick(this.buttonLangs);
    await helpers.waitAndClick(this.englishLangs);
    await helpers.waitAndClick(this.buttonSaveLangs);
    await helpers.waitForClickable(this.buttonLangs);
    await helpers.waitForClickable(this.buttonSaveLangs);
  }

}

export const langsPO = new LangsPageObject();

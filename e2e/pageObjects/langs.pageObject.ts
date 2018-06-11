import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {helpers} from "../utils/helpers";

export class LangsPageObject{

  get buttonLangs(): ElementFinder  {
    return element(by.css('button[class*="select__button"]'));
  }

  get itemLangs(): ElementArrayFinder  {
    return element.all(by.className('select__item'));
  }

  get buttonSaveLangs(): ElementFinder  {
    return element(by.className('button form__save button_theme_action button_size_m i-bem button_js_inited'));
  }

  get optionsHeader(): ElementFinder  {
    return element(by.className('options__header'));
  }

  async changeLangs(number: number) {
    await helpers.waitAndClick(this.buttonLangs);
    await helpers.selectFromDropdownByItem(this.itemLangs, number);
    await helpers.waitAndClick(this.buttonSaveLangs);
  }
}

export const langsPO = new LangsPageObject();

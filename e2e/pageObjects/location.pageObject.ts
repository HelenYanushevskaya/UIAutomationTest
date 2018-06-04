import {by, element, browser, ElementFinder} from 'protractor';
import {waitFor, waitForClickable, setText} from "./../utils/helpers.ts";

export class LocationPageObject {

  get inputLocation(): ElementFinder  {
    return element(by.className('input__control input__input'));
  }

  get popupSearchlocation(): ElementFinder {
    return element(by.className('popup_to_bottom'));
  }

  get searchlocation(): ElementsFinder {
    return element.all(by.className('b-autocomplete-item__reg'));
  }

  get firstSearchlocation(): ElementFinder {
    return this.searchlocation.first();
  }

  async setValueLocation(value: string){
    await setText(this.inputLocation, value);
    await waitFor(this.popupSearchlocation);
    await waitForClickable(this.firstSearchlocation);
    await this.firstSearchlocation.click();
  }
}

export const locationPO = new LocationPageObject();

import {by, element, ElementFinder} from 'protractor';
import {waitFor, waitForClickable, setText} from "./../utils/helpers.ts";
import {helpers} from "../utils/helpers";

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
    await helpers.setText(this.inputLocation, value);
    await helpers.waitFor(this.popupSearchlocation);
    await helpers.waitForClickable(this.firstSearchlocation);
    await this.firstSearchlocation.click();
  }
}

export const locationPO = new LocationPageObject();

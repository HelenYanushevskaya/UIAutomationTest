import {by, element, browser, ElementFinder} from 'protractor';
import {waitFor} from "./../utils/helpers.ts";
import {waitForClickable} from "../utils/helpers";

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
    await waitFor(this.inputLocation);
    await this.inputLocation.clear();
    await this.inputLocation.sendKeys(value);
    await waitFor(this.popupSearchlocation);
    await waitForClickable(this.firstSearchlocation);
    await this.firstSearchlocation.click();
  }
}

export const locationPO = new LocationPageObject();

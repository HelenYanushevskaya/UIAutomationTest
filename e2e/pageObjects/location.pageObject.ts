import {by, element, browser } from 'protractor';
import {waitFor} from "./../utils/helpers.ts";
import {BasePageObject, basePO} from "./base.pageObject";
import {waitForClickable} from "../utils/helpers";

export class LocationPageObject extends BasePageObject{

  get inputLocation() {
    return element(by.className('input__control input__input'));
  }

  get popupSearchlocation() {
    return element(by.className('popup_to_bottom'));
  }

  get searchlocation() {
    return element.all(by.className('b-autocomplete-item__reg'));
  }

  get firstSearchlocation() {
    return this.searchlocation.first()
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

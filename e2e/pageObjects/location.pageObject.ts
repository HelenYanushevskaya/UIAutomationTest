import {by, element, browser } from 'protractor';
import {waitFor} from "./../utils/helpers.ts";
import {BasePageObject, basePO} from "./base.pageObject";

export class LocationPageObject extends BasePageObject{

  get inputLocation() {
    return element(by.css('#city__front-input'));
  }

  async setValueLocation(value: string){
    await waitFor(this.inputLocation);
    await this.inputLocation.clear();
    await this.inputLocation.sendKeys(value);
    await browser.sleep(1000);
    await this.inputLocation.sendKeys(protractor.Key.ENTER);
  }
}

export const locationPO = new LocationPageObject();

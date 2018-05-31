import {by, element, browser } from 'protractor';
import {waitFor} from "./../utils/helpers.ts";
import {BasePageObject, basePO} from "./base.pageObject";

export class LocationPageObject extends BasePageObject{

  get inputLocation() {
    return element(by.css('#city__front-input'));
  }

  get popupSearchlocation() {
    return element(by.xpath('//div[@class = \'popup popup_animate_no popup_theme_ffffff popup_autoclosable_yes popup_adaptive_yes input__popup input__popup_type_geo input__popup_fade_yes i-bem popup_js_inited popup_to_bottom input_focused_yes popup_visibility_visible\']'));
  }

  get searchlocation() {
    return element.all(by.xpath('//ul/li'));
  }

  get firstSearchlocation() {
    return this.searchlocation.first();
  }

  async setValueLocation(value: string){
    await waitFor(this.inputLocation);
    await this.inputLocation.clear();
    await this.inputLocation.sendKeys(value);
    await waitFor(this.popupSearchlocation);
    await console.log(await this.searchlocation.count());
    await this.firstSearchlocation.click();
  }
}

export const locationPO = new LocationPageObject();

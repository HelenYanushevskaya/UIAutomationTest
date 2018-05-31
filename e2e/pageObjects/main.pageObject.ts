import {browser, by, element } from 'protractor';
import {waitFor} from "./../utils/helpers.ts";
import {BasePageObject} from "./base.pageObject";

export class MainPageObject extends BasePageObject{

  get linkLocation() {
    return element(by.xpath('//div[@class="geolink__button b-ico-geoarrow geolink__button_size_s"]'));
  }

  get textLocation() {
    return element(by.xpath('//span[@class="geolink__reg"]'));
  }
  get linkMore() {
      return element(by.xpath('//div/a[8]'));
  }

  get popupMore() {
    return element(by.xpath('//div[@class = \'home-tabs__more\']'));
  }

  async goToLocation() {
    await waitFor(this.linkLocation);
    await this.linkLocation.click();
  }

  async clickMore() {
    await waitFor(this.linkMore);
    await this.linkMore.click();
    await waitFor(mainPO.popupMore);
  }

}

export const mainPO = new MainPageObject();

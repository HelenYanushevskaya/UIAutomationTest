import {browser, by, element } from 'protractor';
import {waitFor,waitForClickable} from "./../utils/helpers.ts";
import {BasePageObject} from "./base.pageObject";

export class MainPageObject extends BasePageObject{

  get linkLocation() {
    return element(by.className('geolink__button b-ico-geoarrow geolink__button_size_s'));
  }

  get textLocation() {
    return element(by.className('geolink__reg'));
  }

  get linkMore() {
      return element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher'));
  }

  get popupMore() {
    return element(by.className('home-tabs__more'));
  }

  async goToLocation() {
    await waitFor(this.linkLocation);
    await this.linkLocation.click();
  }

  async clickMore() {
    await waitFor(this.linkMore);
    await waitForClickable(this.linkMore);
    await this.linkMore.click();
    await waitFor(mainPO.popupMore);
  }

}

export const mainPO = new MainPageObject();

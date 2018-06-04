import {by, element, ElementFinder} from 'protractor';
import {waitFor,waitForClickable} from "./../utils/helpers.ts";

export class MainPageObject {

  get linkLocation(): ElementFinder  {
    return element(by.className('geolink__button b-ico-geoarrow geolink__button_size_s'));
  }

  get textLocation(): ElementFinder  {
    return element(by.className('geolink__reg'));
  }

  get linkMore(): ElementFinder  {
      return element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher'));
  }

  get popupMore(): ElementFinder {
    return element(by.className('home-tabs__more'));
  }

  get popupMore(): ElementFinder {
    return element(by.className('home-tabs__more'));
  }

  get langs(): ElementFinder {
    return element(by.className('T0 headline__bar-item b-langs'));
  }

  get menu(): ElementFinder {
    return element(by.className('b-menu__list b-menu-vert__layout'));
  }

  get itemMenu(): ElementFinder {
    return element(by.className('b-menu__item b-menu__layout-vert-cell'));
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

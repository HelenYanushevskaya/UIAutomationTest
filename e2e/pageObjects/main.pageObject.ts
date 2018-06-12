import {by, element, ElementFinder} from 'protractor';
import {waitFor,waitForClickable} from "./../utils/helpers.ts";
import {helpers} from "../utils/helpers";
import {basePO} from "./base.pageObject";
import {langsPO} from "./langs.pageObject";

export class MainPageObject{

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
    return element(by.cssContainingText('.link__inner', 'Rus'));
  }

  get moreLangs(): ElementFinder {
    return element(by.className('b-menu__item b-menu__layout-vert-cell_position_last b-menu__item_pos_last'));
  }

  get itemMenu(): ElementFinder {
    return element(by.className('b-menu__item b-menu__layout-vert-cell'));
  }

  get linkVideo(): ElementFinder  {
    return element(by.css('a[data-id = "video"]'));
  }

  get linkImages(): ElementFinder  {
    return element(by.css('a[data-id = "images"]'));
  }

  get linkNews(): ElementFinder  {
    return element(by.css('a[data-id = "news"]'));
  }

  get linkMaps(): ElementFinder  {
    return element(by.css('a[data-id = "maps"]'));
  }

  get linkMarket(): ElementFinder  {
    return element(by.css('a[data-id = "market"]'));
  }

  get linkTranslate(): ElementFinder  {
    return element(by.css('a[data-id = "translate"]'));
  }

  get linkMusic(): ElementFinder  {
    return element(by.css('a[data-id = "music"]'));
  }


  async goToLocation() {
    await helpers.waitFor(this.linkLocation);
    await this.linkLocation.click();
  }

  async clickMore() {
    await helpers.waitFor(this.linkMore);
    await helpers.waitForClickable(this.linkMore);
    await this.linkMore.click();
    await helpers.waitFor(this.popupMore);
  }

  async goToLangsPage() {
    await basePO.goToYandexPage();
    await helpers.waitAndClick(this.langs);
    await helpers.waitAndClick(this.moreLangs);
  }
}

export const mainPO = new MainPageObject();

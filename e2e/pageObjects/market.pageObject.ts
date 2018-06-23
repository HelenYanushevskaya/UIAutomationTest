import {by, element, browser, ElementFinder, ElementArrayFinder} from 'protractor';
import {helpers} from '../utils/helpers';
import {basePO} from './base.pageObject';
import {text} from '@angular/core/src/render3/instructions';

export class MarketPageObject {

  get xiaomi(): ElementFinder  {
    return element.all(by.className('NVoaOvqe58 _1gAodJU0Dw')).get(5);
  }

  get storeRating1(): ElementFinder {
    return element.all(by.className('_2zRi9ex2Rl')).get(2);
  }

  get headerSearch(): ElementFinder {
    return element(by.css('input#header-search'));
  }

  get searchSuggest(): ElementArrayFinder {
    return element.all(by.css('.suggest2-rich-item_js_inited'));
  }

  get searchSuggest2Content(): ElementFinder {
    return element(by.css('suggest2__content'));
  }

  get searchButton(): ElementFinder {
    return element(by.css('button[type="submit"]'));
  }

  get activeBasket(): ElementArrayFinder {
    return element.all(by.className('n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited hint_js_inited _popup2-destructor _popup2-destructor_js_inited link_js_inited link_hovered_yes'));
  }

  get addBasket(): ElementArrayFinder {
    return element.all(by.className('n-product-toolbar__item link link_theme_minor hint n-user-lists_type_compare i-bem n-user-lists_type_compare_in-list_no n-user-lists_type_compare_js_inited'));
  }

  get productText(): ElementArrayFinder {
    return element.all(by.css('a[class="link n-link_theme_blue"]'));
  }

  get informPanel(): ElementFinder {
    return element(by.css('popup-informer__pane popup-informer__pane_type_notify'));
  }

  get linkCompare(): ElementFinder {
    return element(by.className('header2-menu__icon header2-menu__icon_hint_yes header2-menu__icon_type_compare hint i-bem'));
  }

  get productTextCompare(): ElementArrayFinder {
    return element.all(by.className('n-compare-head__name link'));
  }

  get deleteBasket(): ElementArrayFinder {
    return element.all(by.className('n-compare-head__close n-hint i-bem n-hint_js_inited'));
  }

  get textDontHaveProducts(): ElementFinder {
    return element(by.className('title title_size_18'));
  }

  get linkCamera(): ElementFinder  {
    return element(by.cssContainingText('.catalog-menu__list-item', 'Экшн-камеры'));
  }

  get linkRefrigerators(): ElementArrayFinder  {
    return element.all(by.cssContainingText('.catalog-menu__list-item', 'Холодильники'));
  }

  get linkElectronics(): ElementFinder  {
    return element(by.cssContainingText('.topmenu__link', 'Электроника'));
  }

  get linkAppliances(): ElementFinder  {
    return element(by.cssContainingText('.topmenu__link', 'Бытовая техника'));
  }

  get linkSortCost(): ElementFinder  {
    return element(by.cssContainingText('.n-filter-sorter__link', 'по цене'));
  }

  get inputWidth(): ElementFinder  {
    return element(by.css('input[name="Ширина до"]'));
  }

  get cost(): ElementArrayFinder  {
    return element.all(by.className('price'));
  }

  get preload(): ElementArrayFinder  {
    return element.all(by.className('preloadable__preloader preloadable__preloader_visibility_visible preloadable__paranja'));
  }

  get textWidthRefrigerators(): ElementArrayFinder  {
    return element.all(by.cssContainingText('.n-snippet-card2__desc-item', 'x'));
  }

  async addProductInBasket(number: number) {
    const elementBasket: ElementFinder = this.addBasket.get(number);

    await helpers.focusElement(elementBasket);
    await helpers.waitAndClick(elementBasket);
  }

  async clickLinkCompare() {
    await helpers.waitAndClick(this.linkCompare);
    await helpers.waitForClickable(this.productTextCompare.get(0));
  }

  async deleteProductInBasket(number: number) {
    const deleteElementBasket: ElementFinder = this.deleteBasket.get(number);

    await helpers.focusElement(deleteElementBasket);
    await helpers.waitAndClick(deleteElementBasket);
  }

  async clickLinkElectronics() {
    await helpers.waitAndClick(this.linkElectronics);
    await helpers.waitFor(this.linkCamera);
  }

  async clickLinkAppliances() {
    await helpers.waitAndClick(this.linkAppliances);
    await helpers.waitFor(this.linkRefrigerators.first());
  }

  async clickLinkActionCameras() {
    await helpers.waitAndClick(this.linkCamera);
    await helpers.waitFor(this.cost.first());
  }

  async clickLinkActionRefrigerators() {
    await helpers.waitAndClick(this.linkRefrigerators.first());
    await helpers.waitFor(this.cost.first());
  }

  async sortByCostDesk() {
    await marketPO.linkSortCost.click();
    await helpers.waitFor(this.cost.first());
    await marketPO.linkSortCost.click();
    await helpers.waitFor(this.cost.first());
  }

  async getNumberCost(elementArray: ElementArrayFinder): Array {
    const array = await elementArray.getText();

    for (let item = 0; item < array.length; item++ ) {
      const str: string = array[item];
      str = str.replace(',', '.');
      str = str.split(' ').join('');
      array[item] = str.substr(0, str.length - 4);
    }
    return array;
  }
  async sortDec() {
    await marketPO.linkSortCost.click();
    await helpers.waitForDisappearance(this.preload.first());
    await marketPO.linkSortCost.click();
    await helpers.waitForDisappearance(this.preload.first());
    await helpers.waitFor(this.cost.first());
  }

  async sortArrayWidthDec(array: Array) {
    await array.sort(function (a: number, b: number) {
      return b - a;
    });
  }

  async getWidthRefrigerators(elementArray: ElementArrayFinder): Array {
    const array = await elementArray.getText();

    for (let item = 0; item < array.length; item++ ) {
      const str: string = array[item];
      array[item] = str.split('x')[0];
    }
    return array;
  }
  async addProduct(searchValue: string) {
    await helpers.setText(this.headerSearch, searchValue);
    await helpers.waitAndClick(this.searchButton);
    await this.addProductInBasket(0);
    await this.addProductInBasket(0);
  }
}

export const marketPO = new MarketPageObject();

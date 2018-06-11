import {browser, by, element, ElementArrayFinder, ElementFinder, protractor} from 'protractor';
import {waitFor,waitAndClick, setText} from "./../utils/helpers.ts";
import {waitForClickable, selectFromDropdownByItem} from "../utils/helpers";
import { mailPO } from './../pageObjects/mail.pageObject';

export class BasePageObject {

  get buttonLogInMail(): ElementFinder  {
    return element(by.className('desk-notif-card__login-enter-expanded button_theme_bordergray'));
  }

  get passportIconYandex(): ElementFinder  {
    return element(by.className('passport-Icon_yandex'));
  }

  get passportInputController(): ElementArrayFinder  {
    return element.all(by.className('passport-Input-Controller'));
  }

  get inputLogin(): ElementFinder  {
    return this.passportInputController.get(0);
  }

  get inputPassword(): ElementFinder  {
    return this.passportInputController.get(1);
  }

  get passportButtonText(): ElementFinder  {
    return element(by.className('passport-Button-Text'));
  }

  get errorAutorization(): ElementFinder  {
    return element(by.className('passport-Domik-Form-Error passport-Domik-Form-Error_active'));
  }

  get otherAccount(): ElementFinder  {
    return element(by.className('passport-Domik-Account-Link passport-Domik-Link'));
  }

  goToYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://yandex.by/');
  }

  goToMobileMarketYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://market.yandex.by/catalog/54726/list?onstock=1&local-offers-first=0');
  }

  async login(login: string, password:string) {
    await this.goToYandexPage();
    await waitAndClick(this.buttonLogInMail);

    const user = await this.otherAccount.isPresent();
    if (user == true){
      await waitAndClick(this.otherAccount);
      await waitFor(this.inputLogin);
    }
    await setText(this.inputLogin, login);
    await setText(this.inputPassword, password);
    await waitAndClick(this.passportButtonText);
  }

  async logout(){
    await waitAndClick(mailPO.mailUserAvatar);
    await selectFromDropdownByItem(mailPO.mailDropdownItem,4)
  }
}

export const basePO = new BasePageObject();

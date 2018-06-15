import {browser, by, element, ElementArrayFinder, ElementFinder, protractor} from 'protractor';
import {helpers} from '../utils/helpers';
import {mailPO} from './../pageObjects/mail.pageObject';


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

  get logo(): ElementFinder  {
    return element.all(by.css('[class *= "logo"]')).first();
  }

  get logoMusic(): ElementFinder  {
    return element(by.className('logo__ya-sub'));
  }

  get logoTextTranslate(): ElementFinder  {
    return element(by.className('logo-text'));
  }

  goToYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://yandex.by/');
  }

  goToMobileMarketYandexPage() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://market.yandex.by/catalog/54726/list?onstock=1&local-offers-first=0');
  }


  async login(login: string, password: string) {
    await this.goToYandexPage();
    await helpers.waitAndClick(this.buttonLogInMail);

    const user: boolean = await this.otherAccount.isPresent();
    if (user == true) {
      await helpers.waitAndClick(this.otherAccount);
      await helpers.waitFor(this.inputLogin);
    }
    //await helpers.setText(this.inputLogin, login);
    await helpers.sendTextAction(this.inputLogin, login);
    await helpers.sendTextAction(this.inputPassword, password);
    await helpers.waitAndClick(this.passportButtonText);
    await helpers.waitForClickableEC(mailPO.mailUserName);
  }

  async invalidLogin(login: string, password: string) {
    await basePO.login(login, password);
    await browser.sleep(1000);
    await helpers.waitElementEC(basePO.errorAutorization);
  }

  async logout() {
    await helpers.waitAndClick(mailPO.mailUserAvatar);
    await helpers.selectFromDropdownByItem(mailPO.mailDropdownItem, 4);
  }

  async navigateTo(element: ElementFinder, page?: string, waitElement?: ElementFinder) {
    await basePO.goToYandexPage();
    await helpers.waitAndClick(element);
    if (waitElement) {
      await helpers.waitFor(waitElement, page);
    } else {
      await helpers.waitFor(this.logo, page);
    }
  }
}

export const basePO = new BasePageObject();

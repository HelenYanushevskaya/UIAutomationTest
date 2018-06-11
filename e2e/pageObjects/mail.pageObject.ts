import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {waitFor,waitForClickable} from "./../utils/helpers.ts";
import {BasePageObject} from "./base.pageObject";
import {first} from "rxjs/operators";

export class MailPageObject{

  get mailUserName(): ElementFinder  {
    return element(by.className('mail-User-Name'));
  }

  get mailUserAvatar(): ElementFinder  {
    return element(by.className('mail-User-Avatar mail-User-Avatar_size_42 mail-User-Avatar_header js-user-picture'));
  }

  get mailDropdownItem(): ElementArrayFinder  {
    return element.all(by.className('b-mail-dropdown__item__content js-user-dropdown-item'));
  }
}

export const mailPO = new MailPageObject();

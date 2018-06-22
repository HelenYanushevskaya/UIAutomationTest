import {browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor';
import {marketPO} from '../pageObjects/market.pageObject';

export class Helpers {

  async checkElementDisplayed(element: ElementFinder, count: number, message?: string): boolean {
    if (count < 10) {
      try {
        const result = await element.isDisplayed();
        if (result === false) {
          browser.sleep(1000);
          count++;
          if (message) {
            console.log('Элемент существует в DOM и скрыт ' + message);
            this.checkElementDisplayed(element, count, message);
          } else {
            console.log('Элемент существует в DOM и скрыт ');
            this.checkElementDisplayed(element, count);
          }
        } else {
          return true;
        }
      } catch (error) {
        browser.sleep(1000);
        count++;
        this.checkElementDisplayed(element, count, message);
      }
    } else {
      if (message) {
        console.log('Элемент не существует в DOM ' + message);
        this.checkElementDisplayed(element, count, message);
      } else {
       console.log('Элемент не существует в DOM ');
        this.checkElementDisplayed(element, count);
      }
      return false;
    }
  }

  async waitFor(element: ElementFinder, message?: string) {
    const count = 0;
    this.checkElementDisplayed(element, count, message);
  }

  async scrollTo(element: ElementFinder) {
    const driver = browser.driver;
    await driver.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
  }

  async checkCheckbox(element: ElementFinder) {
    await this.waitFor(element);
    await this.waitForClickable(element);
    await element.click();
  }

  async checkRadioButton(element: ElementFinder) {
    await this.waitFor(element);
    await this.waitForClickable(element);
    await element.click();
  }

  async setText(element: ElementFinder, text: string): string {
    await this.waitElement(element);
    await element.clear();
    await element.sendKeys(text);
    await helpers.waitForDisappearance(marketPO.preload.first());
    //eturn await element.getAttribute('value');
  }

  async selectFromDropdownByItem(elements: ElementArrayFinder, item: number) {
    if (item) {
      await this.waitForClickable(elements.get(item));
      await elements.get(item).click();
     }
  }

  async pressEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }

  async sendTextAction(element: ElementFinder, value: string) {
    await element.clear();
    await browser
      .actions()
      .click(element)
      .sendKeys(value)
      .perform();
  }

  async clickElementAction(element: ElementFinder) {
    await browser
      .actions()
      .click(element)
      .perform();
  }

  async focusElement(element: ElementFinder) {
    await browser
      .actions()
      .mouseDown(element)
      .perform();
  }

  async waitAndClick(element: ElementFinder): string {
    await this.waitForClickable(element);
    await this.clickElementAction(element);
  }

  async waitElement(element: ElementFinder): string {
    const EC = protractor.ExpectedConditions;

    browser.wait(EC.visibilityOf(element), 10000);
  }

  async waitForClickable(element: ElementFinder) {
    const EC = protractor.ExpectedConditions;

    await browser.wait(EC.elementToBeClickable(element, 5000));
  }

  async waitForDisappearance(element: ElementFinder) {
    const EC = protractor.ExpectedConditions;
    try {
      await browser.wait(EC.invisibilityOf(element, 5000));
    } catch (error) {
      throw expectationFailOutput || error;
    }
  }
}

export const helpers = new Helpers();





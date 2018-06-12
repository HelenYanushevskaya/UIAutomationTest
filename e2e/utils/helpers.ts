import {browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor';

export class Helpers {

  async checkElementDisplayed(element: ElementFinder, count: number, message?: string): boolean {
    if (count < 10) {
      try {
        const result = await element.isDisplayed();
        if (result == false) {
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

  async waitForClickable(element: ElementFinder) {
    const EC = protractor.ExpectedConditions;

    await browser.wait(EC.elementToBeClickable(element, 5000));
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
    await this.waitFor(element);
    await element.clear();
    await element.sendKeys(text);

    return await element.getAttribute('value');
  }

//в функцию отправляем список элементов из выпадающего списка и номер на который нужно кликнуть
  async selectFromDropdownByItem(elements: ElementArrayFinder, item: number) {
    if (item) { //если введен номер элемента в списке
      this.waitForClickable(elements.get(item)); //ждем пока он не станет кликабельным
      await
      elements.get(item).click(); //кликаем на элемент
    }
  }

  async pressEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }

  async scrollToElement(element: ElementFinder) {
    await browser
      .actions()
      .mouseDown(element)
      .perform();
  }

  async waitAndClick(element: ElementFinder): string {
    await this.waitForClickable(element);
    await element.click();
  }
}

export const helpers = new Helpers();





import {browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor';
import {elementClass} from "@angular/core/src/render3/instructions";

async function checkElementDisplayed(element: ElementFinder , count: number): boolean {
  if (count < 10) {
    try {
      const result = await element.isDisplayed();
      if (result == false) {
        browser.sleep(1000);
        count++;
        console.log('Элемент существует в DOM и скрыт');
        checkElementDisplayed(element, count);
      } else {
        return true;
      }
    } catch (error) {
      browser.sleep(1000);
      count++;
      checkElementDisplayed(element, count);
    }
  } else {
    console.log('Элемент не существует в DOM');
    return false;
  }
}

export function waitFor(element: ElementFinder ) {
  const count = 0;
  checkElementDisplayed(element, count);
}

export async function waitForClickable(element: ElementFinder) {
  const EC = protractor.ExpectedConditions;

  await browser.wait(EC.elementToBeClickable(element, 5000));
}

export async function scrollTo(element: ElementFinder) {
  const driver = browser.driver;
  await driver.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
}

export async function checkCheckbox(element: ElementFinder) {
  await waitFor(element);
  await waitForClickable(element);
  await element.click();
}

export async function checkRadioButton(element: ElementFinder) {
  await waitFor(element);
  await waitForClickable(element);
  await element.click();
}

export async function setText(element: ElementFinder, text: string): string {
  await waitFor(element);
  await element.clear();
  await element.sendKeys(text);

  return await element.getAttribute('value');
}

//в функцию отправляем список элементов из выпадающего списка и номер на который нужно кликнуть
export async function selectFromDropdownByItem(elements: ElementArrayFinder, item: number) {
  if (item) { //если введен номер элемента в списке
    waitForClickable(elements.get(item)); //ждем пока он не станет кликабельным
    await elements.get(item).click(); //кликаем на элемент
  }
}

export async function pressEnter() {
  await browser
    .actions()
    .sendKeys(protractor.Key.ENTER)
    .perform();
}

export async function scrollToElement (element: ElementFinder) {
  await browser
    .actions()
    .mouseDown(element)
    .perform();
}

export async function waitAndClick(element: ElementFinder): string {
  await waitForClickable(element);
  await element.click();
}



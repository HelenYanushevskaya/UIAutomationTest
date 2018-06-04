import {browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor';

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

export async function selectFromDropdownByItem(elements: ElementArrayFinder, item: number) {
  if (item) {
    waitFor(elements.get(item));
    waitForClickable(elements.get(item));
    await elements.get(item).click();
  }
}



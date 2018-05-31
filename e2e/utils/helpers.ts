import {browser, ElementFinder} from 'protractor';

async function checkElementDisplayed(element: ElementFinder , count: number): boolean {
  if (count < 10) {
    try {
      var result = await element.isDisplayed();
      if (result == false) {
        browser.sleep(1000);
        count++;
        console.log('Элемент существует в DOM и скрыт');
        checkElementDisplayed(element, count);
      }
      else {
        return true;
      }
    }
    catch (error) {
      browser.sleep(1000);
      count++;
      checkElementDisplayed(element, count);
    }
  }
  else {
    console.log('Элемент не существует в DOM');
    return false;
  }
};

export function waitFor(element: ElementFinder ) {
  var count = 0;
  checkElementDisplayed(element, count);
};


export async function waitForClickable(element: ElementFinder) {
  var EC = protractor.ExpectedConditions;

  await browser.wait(EC.elementToBeClickable(element, 5000));

}



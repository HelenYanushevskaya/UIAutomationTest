import {browser} from 'protractor';

async function checkElementDisplayed(element, count): boolean {
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

export function waitFor(element) {
  var count = 0;
  checkElementDisplayed(element, count);
};




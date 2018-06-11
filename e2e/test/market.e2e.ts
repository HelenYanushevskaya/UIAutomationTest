import { basePO } from './../pageObjects/base.pageObject';
import { marketPO } from './../pageObjects/market.pageObject';
import {checkCheckbox, checkRadioButton, scrollTo, setText, selectFromDropdownByItem, waitFor, scrollToElement} from "../utils/helpers";
import {browser} from "protractor";

describe('Работа с базовыми контролами', () => {

  beforeAll(async () => {
    await basePO.goToMobileMarketYandexPage();
  });

  it('Проверка работы базовых контроллеров', async () => {
    const value = 'привет';

    await scrollToElement(marketPO.xiaomi);
    await checkCheckbox(marketPO.xiaomi);

    await scrollToElement(marketPO.storeRating1);
    await checkRadioButton(marketPO.storeRating1);

    await scrollToElement(marketPO.headerSearch);
    await setText(marketPO.headerSearch, value);
    await selectFromDropdownByItem(marketPO.searchSuggest, 1);
  });
});

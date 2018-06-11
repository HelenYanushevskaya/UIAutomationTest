import { basePO } from './../pageObjects/base.pageObject';
import { marketPO } from './../pageObjects/market.pageObject';
import {
  checkCheckbox,
  checkRadioButton,
  scrollTo,
  setText,
  selectFromDropdownByItem,
  waitFor,
  scrollToElement,
  helpers
} from "../utils/helpers";
import {browser} from "protractor";

describe('Работа с базовыми контролами', () => {

  beforeAll(async () => {
    await basePO.goToMobileMarketYandexPage();
  });

  it('Проверка работы базовых контроллеров', async () => {
    const value = 'привет';

    await helpers.scrollToElement(marketPO.xiaomi);
    await helpers.checkCheckbox(marketPO.xiaomi);

    await helpers.scrollToElement(marketPO.storeRating1);
    await helpers.checkRadioButton(marketPO.storeRating1);

    await helpers.scrollToElement(marketPO.headerSearch);
    await helpers.setText(marketPO.headerSearch, value);
    await helpers.selectFromDropdownByItem(marketPO.searchSuggest, 1);
  });
});

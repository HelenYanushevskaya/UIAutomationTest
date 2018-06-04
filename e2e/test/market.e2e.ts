import { basePO } from './../pageObjects/base.pageObject';
import { marketPO } from './../pageObjects/market.pageObject';
import {checkCheckbox, checkRadioButton, scrollTo, setText, selectFromDropdownByItem, waitFor} from "../utils/helpers";
import {browser} from "protractor";

fdescribe('Работа с базовыми контролами', () => {

  beforeAll(async () => {
    await basePO.goToMobileMarketYandexPage();
  });

  it('Проверка работы базовых контроллеров', async () => {
    const value = 'привет';

    await scrollTo(marketPO.xiaomi);
    await checkCheckbox(marketPO.xiaomi);

    await scrollTo(marketPO.storeRating1);
    await checkRadioButton(marketPO.storeRating1);

    await setText(marketPO.headerSearch, value);
    await selectFromDropdownByItem(marketPO.searchSuggest, 1);
  });



});

import { basePO } from './../pageObjects/base.pageObject';
import { marketPO } from './../pageObjects/market.pageObject';
import { helpers } from '../utils/helpers';

describe('Работа с базовыми контролами', () => {

  beforeAll(async () => {
    await basePO.goToMobileMarketYandexPage();
  });

  it('Проверка работы базовых контроллеров', async () => {
    const value = 'привет';

    await helpers.focusElement(marketPO.xiaomi);
    await helpers.checkCheckbox(marketPO.xiaomi);

    await helpers.focusElement(marketPO.storeRating1);
    await helpers.checkRadioButton(marketPO.storeRating1);

    await helpers.focusElement(marketPO.headerSearch);
    await helpers.setText(marketPO.headerSearch, value);
    await helpers.selectFromDropdownByItem(marketPO.searchSuggest, 1);
  });
});

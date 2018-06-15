import { basePO } from './../pageObjects/base.pageObject';
import { marketPO } from './../pageObjects/market.pageObject';
import { helpers } from '../utils/helpers';

describe('Работа с базовыми контролами', () => {

  beforeAll(async () => {
    await basePO.goToMobileMarketYandexPage();
  });

  it('Проверка работы базовых контроллеров', async () => {
    const value = 'привет';

    await helpers.scrollToElementAction(marketPO.xiaomi);
    await helpers.checkCheckbox(marketPO.xiaomi);

    await helpers.scrollToElementAction(marketPO.storeRating1);
    await helpers.checkRadioButton(marketPO.storeRating1);

    await helpers.scrollToElementAction(marketPO.headerSearch);
    await helpers.setText(marketPO.headerSearch, value);
    await helpers.selectFromDropdownByItem(marketPO.searchSuggest, 1);
  });
});

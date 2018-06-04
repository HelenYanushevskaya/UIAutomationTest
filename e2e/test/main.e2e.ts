import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { locationPO } from './../pageObjects/location.pageObject';

xdescribe('Первый пулл тестов', () => {

  beforeAll(async () => {
    await basePO.goToYandexPage();
  });

  it('Изменение информации в "ЕЩЕ" при смены локации', async () => {
    const LondonLocation = 'Лондон';
    const ParisLocation = 'Париж';

    await mainPO.goToLocation();
    await locationPO.setValueLocation(LondonLocation);

    await mainPO.clickMore();

    const textLondonLocation = await mainPO.popupMore.getText();

    await mainPO.goToLocation();
    await locationPO.setValueLocation(ParisLocation);
    await mainPO.clickMore();

    const textParisLocation = await mainPO.popupMore.getText();

    expect(textParisLocation).toBe(textLondonLocation);
  });

});

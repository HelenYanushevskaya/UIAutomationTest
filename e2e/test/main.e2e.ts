import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { locationPO } from './../pageObjects/location.pageObject';


import { browser, by, element } from 'protractor';

describe('Первый пулл тестов', () => {

  beforeAll(async () => {
    await basePO.goToYandexPage();
  });

  fit('Изменение информации в "ЕЩЕ" при смены локации', async () => {
    const newLocation = 'Лондон';

    await mainPO.clickMore();

    const textCurrentLocation = await mainPO.popupMore.getText();

    await mainPO.goToLocation();
    await locationPO.setValueLocation(newLocation);
    await mainPO.clickMore();

    //const textNewLocation = await mainPO.popupMore.getText();

    //expect(textNewLocation).toBe(textCurrentLocation);
  });

});

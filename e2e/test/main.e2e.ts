import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { mailPO } from './../pageObjects/mail.pageObject';
import { langsPO } from './../pageObjects/langs.pageObject';
import { locationPO } from './../pageObjects/location.pageObject';
import {browser} from 'protractor';
declare let allure: any;
describe('Первый пулл тестов', () => {

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

    /*await mainPO.goToLocation();
    await locationPO.setValueLocation(ParisLocation);
    await mainPO.clickMore();

    const textParisLocation = await mainPO.popupMore.getText();

    expect(textParisLocation).toBe(textLondonLocation);*/
  });
});

describe('Пулл тестов #2', () => {

  const login: string = 'AutotestUser';
  const password: string = 'AutotestUser123';
  const invalidLogin: string = 'NoAutotestUser';
  const invalidPassword: string = 'NoAutotestUser123';

  it('Логин на яндекс почту', async () => {
    await basePO.login(login, password);

    expect(await mailPO.mailUserName.getText()).toBe(login);

    await basePO.logout();
  });

  it('Яндекс почта - логаут', async () => {
    await basePO.login(login, password);
    await basePO.logout();

    expect(basePO.buttonLogInMail.isDisplayed()).toBeTruthy();
  });

  it('Яндекс почта - невалидный пароль', async () => {
    await basePO.invalidLogin(login, invalidPassword);

    expect(await basePO.errorAutorization.getText()).toBe("Неверный пароль");
  });

  it('Яндекс почта - невалидный логин', async () => {
    await basePO.invalidLogin(invalidLogin, password);

    expect(await basePO.errorAutorization.getText()).toBe("Такого аккаунта нет");
  });

  it('Яндекс - навигация', async () => {
    await basePO.navigateTo(mainPO.linkVideo, 'видео');

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/video/');

    await basePO.navigateTo(mainPO.linkImages, 'картинки');

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/images/');

    await basePO.navigateTo(mainPO.linkNews, "новости");

    expect(await browser.getCurrentUrl()).toContain('https://news.yandex.by/');

    await basePO.navigateTo(mainPO.linkMaps, "карты");

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/maps');

    await basePO.navigateTo(mainPO.linkMarket, "магазин");

    expect(await browser.getCurrentUrl()).toContain('ttps://market.yandex.by/');

    await basePO.navigateTo(mainPO.linkTranslate, "переводчик", basePO.logoTextTranslate);

    expect(await browser.getCurrentUrl()).toContain('https://translate.yandex.by/');

    await basePO.navigateTo(mainPO.linkMusic, "музыка", basePO.logoMusic);

    expect(await browser.getCurrentUrl()).toContain('https://music.yandex.by/home')
  });

  it('Яндекс - переключение языка на английский', async () => {
    await mainPO.goToLangsPage();

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/tune/lang/');

    await langsPO.changeLangsOnEnglish();
    await mainPO.goToLangsPage();

    expect(await langsPO.optionsHeader.getText()).toBe('Interface language');

  });
});

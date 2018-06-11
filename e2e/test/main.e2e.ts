import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { mailPO } from './../pageObjects/mail.pageObject';
import { langsPO } from './../pageObjects/langs.pageObject';
import { locationPO } from './../pageObjects/location.pageObject';
import {waitFor, waitForClickable,setText, waitAndClick, selectFromDropdownByItem} from "../utils/helpers";
import {browser} from "protractor";

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

    await mainPO.goToLocation();
    await locationPO.setValueLocation(ParisLocation);
    await mainPO.clickMore();

    const textParisLocation = await mainPO.popupMore.getText();

    expect(textParisLocation).toBe(textLondonLocation);
  });
});

fdescribe('Пулл тестов #2', () => {

  const login = 'AutotestUser';
  const password = 'AutotestUser123';
  const invalidLogin = 'NoAutotestUser';
  const invalidPassword = 'NoAutotestUser123';

  it('Логин на яндекс почту', async () => {
    await basePO.login(login, password);
    await waitForClickable(mailPO.mailUserName);

    expect(await mailPO.mailUserName.getText()).toBe(login);

    await basePO.logout();
  });

  it('Яндекс почта - логаут', async () => {
    await basePO.login(login, password);
    await basePO.logout();

    expect(basePO.buttonLogInMail.isDisplayed()).toBeTruthy();
  });

  it('Яндекс почта - невалидный пароль', async () => {
    await basePO.login(login, invalidPassword);
    await browser.sleep(1000); // после нажатия кнопки при невалидной авторизации происходит обнвление страницы,
                               // поэтому недостаточно просто дождаться отображения элемента страницы
    await waitFor(basePO.errorAutorization);

    expect(await basePO.errorAutorization.getText()).toBe("Неверный пароль");
  });

  it('Яндекс почта - невалидный логин', async () => {
    await basePO.login(invalidLogin, password);
    await browser.sleep(1000);
    await waitFor(basePO.errorAutorization);

    expect(await basePO.errorAutorization.getText()).toBe("Такого аккаунта нет");
  });

  it('Яндекс - навигация', async () => {
    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkVideo);

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/video/');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkImages);

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/images/');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkNews);

    expect(await browser.getCurrentUrl()).toContain('https://news.yandex.by/');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkMaps);

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/maps');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkMarket);

    expect(await browser.getCurrentUrl()).toContain('ttps://market.yandex.by/');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkTranslate);

    expect(await browser.getCurrentUrl()).toContain('https://translate.yandex.by/');

    await basePO.goToYandexPage();
    await waitAndClick(mainPO.linkMusic);

    expect(await browser.getCurrentUrl()).toContain('https://music.yandex.by/home')
  });

  it('Яндекс - переключение языка на английский', async () => {
    await basePO.goToYandexPage();
    await waitAndClick(mainPO.langs);
    await waitAndClick(mainPO.moreLangs);

    expect(await browser.getCurrentUrl()).toContain('https://yandex.by/tune/lang/');

    await waitAndClick(langsPO.buttonLangs);
    await selectFromDropdownByItem(langsPO.itemLangs, 5);
    await waitAndClick(langsPO.buttonSaveLangs);
    await waitAndClick(mainPO.langs);
    await waitAndClick(mainPO.moreLangs);

    expect(await langsPO.optionsHeader.getText()).toBe('Interface language');

  });
});

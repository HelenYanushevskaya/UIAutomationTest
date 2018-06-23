import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { marketPO} from './../pageObjects/market.pageObject';
import { musicPO } from './../pageObjects/music.pageObject';
import {helpers} from '../utils/helpers';

fdescribe('Второй пулл тестов', () => {
  const music: string = 'Maroon 5';
  const login: string = 'AutotestUser';
  const password: string = 'AutotestUser123';
  const searchValue: string = 'Note 8';

  it('Яндекс маркет - добавление в сравнение', async () => {
    await basePO.navigateTo(mainPO.linkMarket);
    await marketPO.addProduct(searchValue);

    const productText1 = await marketPO.productText.get(0).getText();
    const productText2 = await marketPO.productText.get(1).getText();

    await marketPO.clickLinkCompare();

    expect(await marketPO.productTextCompare.get(1).getText()).toEqual(productText1);
    expect(await marketPO.productTextCompare.get(0).getText()).toEqual(productText2);
  });

  it('Яндекс маркет - удаление добавленных товаров', async () => {
    const dontHaveProducts: string = 'Товаров нет';

    await basePO.navigateTo(mainPO.linkMarket);
    await marketPO.addProduct(searchValue);
    await marketPO.clickLinkCompare();

    await marketPO.deleteProductInBasket(0);
    await marketPO.deleteProductInBasket(1);

    expect(await marketPO.textDontHaveProducts.getText()).toEqual(dontHaveProducts);
    expect(await marketPO.deleteBasket.get(0).isDisplayed()).not.toBeTruthy();
    expect(await marketPO.deleteBasket.get(1).isDisplayed()).not.toBeTruthy();
  });

  it('Яндекс маркет - сортировка по цене', async () => {
    await basePO.navigateTo(mainPO.linkMarket);

    await marketPO.clickLinkElectronics();
    await marketPO.clickLinkActionCameras();

    const currentCost: Array = await marketPO.getNumberCost(marketPO.cost);

    await marketPO.sortDec();

    const afterSortCost: Array = await marketPO.getNumberCost(marketPO.cost);

    await marketPO.sortArrayWidthDec(afterSortCost);

    expect(currentCost).toEqual(afterSortCost);
  });

  it('Яндекс маркет - сортировка по тегу:', async () => {
    const width: string = '50';

    await basePO.navigateTo(mainPO.linkMarket);
    await marketPO.clickLinkAppliances();
    await marketPO.clickLinkActionRefrigerators();
    await helpers.focusElement(marketPO.inputWidth);

    const currentWidth: Array = await marketPO.getWidthRefrigerators(marketPO.textWidthRefrigerators);

    await helpers.setText(marketPO.inputWidth, width);

    const afterSortWidth: Array = await marketPO.getWidthRefrigerators(marketPO.textWidthRefrigerators);

    await marketPO.sortArrayWidthDec(afterSortWidth);

    expect(currentWidth).toEqual(afterSortWidth);
  });

  it('Яндекс - музыка', async () => {
    await basePO.login(login, password);
    await basePO.goToMusic();
    await musicPO.searchMusic(music, musicPO.musicMaroon5, musicPO.singerPopularAlbums);

    const text: Array = await musicPO.singerPopularAlbums.getAttribute('title');

    expect(await musicPO.toEqualMusic(text, music)).toBe(true);
  });

  it('Яндекс - музыка - вопроизведение', async () => {
    await basePO.login(login, password);
    await basePO.goToMusic();
    await musicPO.searchMusic(music, musicPO.musicMaroon5, musicPO.singerPopularAlbums);

    await musicPO.clickPlayMusic();
    expect(await musicPO.pauseMusic.isDisplayed()).toBe(true);

    await musicPO.clickPlayMusic();
    expect(await  musicPO.playMusic.isDisplayed()).toBe(true);
  });
});


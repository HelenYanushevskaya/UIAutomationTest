import { basePO } from './../pageObjects/base.pageObject';
import { mainPO } from './../pageObjects/main.pageObject';
import { marketPO} from './../pageObjects/market.pageObject';
import { musicPO } from './../pageObjects/music.pageObject';
import {helpers} from '../utils/helpers';

fdescribe('Второй пулл тестов', () => {

  it('Яндекс маркет - добавление в сравнение', async () => {
    const searchValue = 'Note 8';

    await basePO.navigateTo(mainPO.linkMarket);
    await marketPO.addProduct(searchValue);

    const productText1 = await marketPO.productText.get(0).getText();
    const productText2 = await marketPO.productText.get(1).getText();

    await marketPO.clickLinkCompare();

    expect(await marketPO.productTextCompare.get(1).getText()).toEqual(productText1);
    expect(await marketPO.productTextCompare.get(0).getText()).toEqual(productText2);
  });

  it('Яндекс маркет - удаление добавленных товаров', async () => {
    const searchValue = 'Note 8';
    const dontHaveProducts = 'Товаров нет';

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

    const currentCost = await marketPO.getNumberCost(marketPO.cost);

    await marketPO.sortDec();

    const afterSortCost = await marketPO.getNumberCost(marketPO.cost);

    await currentCost.sort(function (a, b) {
      return b - a;
    });

    expect(currentCost).toEqual(afterSortCost);
  });

  it('Яндекс маркет - сортировка по тегу:', async () => {
    const width = '50';

    await basePO.navigateTo(mainPO.linkMarket);
    await marketPO.clickLinkAppliances();
    await marketPO.clickLinkActionRefrigerators();
    await helpers.focusElement(marketPO.inputWidth);

    const currentWidth = await marketPO.getWidthRefrigerators(marketPO.textWidthRefrigerators);

    await helpers.setText(marketPO.inputWidth, width);


    const afterSortWidth = await marketPO.getWidthRefrigerators(marketPO.textWidthRefrigerators);

    await currentWidth.sort(function (a, b) {
      return b - a;
    });

    expect(currentWidth).toEqual(afterSortWidth);
  });

  it('Яндекс - музыка', async () => {
    const music = 'Maroon 5';
    const login = 'AutotestUser';
    const password = 'AutotestUser123';

    await basePO.login(login, password);
    await basePO.goToMusic();
    await musicPO.searchMusic(music, musicPO.musicMaroon5, musicPO.singerPopularAlbums);

    const text: string = await musicPO.singerPopularAlbums.getAttribute('title');

    for (let i = 0; i < text.length; i++) {
      await expect(text[i]).toEqual(music);
    }

  });

  it('Яндекс - музыка - вопроизведение', async () => {
    const music = 'Maroon 5';
    const login = 'AutotestUser';
    const password = 'AutotestUser123';

    await basePO.login(login, password);
    await basePO.goToMusic();
    await musicPO.searchMusic(music, musicPO.musicMaroon5, musicPO.singerPopularAlbums);

    await musicPO.clickPlayMusic();
    await expect(musicPO.pauseMusic.isDisplayed()).toBe(true);

    await musicPO.clickPlayMusic();
    await expect(musicPO.playMusic.isDisplayed()).toBe(true);
  });
});


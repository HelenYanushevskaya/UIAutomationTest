import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {helpers} from '../utils/helpers';

export class MusicPageObject {

  get musicMaroon5(): ElementFinder  {
    return element(by.cssContainingText('div.typo  div:nth-child(1)', 'Maroon 5'));
  }

  get musicBeyonce(): ElementFinder  {
    return element(by.cssContainingText('div.typo  div:nth-child(1)', 'Beyoncé'));
  }

  get inputSearchMusic(): ElementFinder  {
    return element(by.css('.head__search input'));
  }

  get singerPopularAlbums(): ElementArrayFinder  {
    return element.all(by.className('album__artist'));
  }

  get suggestPopup(): ElementFinder  {
    return element(by.className('d-suggest__popup deco-popup-suggest-menu'));
  }

  get overhead(): ElementFinder  {
    return element(by.css('div.d-overhead'));
  }

  get popularTracks(): ElementFinder  {
    return element(by.css('div.d-generic-page-head__main-actions button.button2'));
  }

  get playMusic(): ElementFinder  {
    return element(by.className('player-controls__btn player-controls__btn_play'));
  }

  get pauseMusic(): ElementFinder  {
    return element(by.className('player-controls__btn player-controls__btn_play player-controls__btn_pause'));
  }

  async searchMusic(music: string, clickElement: ElementFinder, waitElement: ElementArrayFinder) {
    await helpers.setText(musicPO.inputSearchMusic, music);
    await helpers.waitForClickable(clickElement);
    await helpers.waitAndClick(clickElement);
    await helpers.waitElement(waitElement.first());

  }

  async clickPlayMusic() {
    await helpers.waitElement(this.popularTracks);
    await helpers.waitForClickable(this.popularTracks);
    await helpers.scrollTo(this.popularTracks);
    await helpers.waitAndClick(this.popularTracks);
  }

  async toEqualMusic(text: Array, music: string): boolean {
    let count = 0;
    for (let i: number; i < text.length; i++) {
     if (text[i] == music ) { count++; }
    }
    if (count == text.length) { return true; } else { return false; }
}
}

export const musicPO = new MusicPageObject();

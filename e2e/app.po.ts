export class Ang2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ang2-app h1')).getText();
  }
}

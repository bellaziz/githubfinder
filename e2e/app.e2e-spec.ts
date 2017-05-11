import { HerosappPage } from './app.po';

describe('herosapp App', () => {
  let page: HerosappPage;

  beforeEach(() => {
    page = new HerosappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

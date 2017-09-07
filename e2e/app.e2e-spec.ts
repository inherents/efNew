import { EfNewPage } from './app.po';

describe('ef-new App', function() {
  let page: EfNewPage;

  beforeEach(() => {
    page = new EfNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

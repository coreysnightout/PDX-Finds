import { PdxFindsPage } from './app.po';

describe('pdx-finds App', function() {
  let page: PdxFindsPage;

  beforeEach(() => {
    page = new PdxFindsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

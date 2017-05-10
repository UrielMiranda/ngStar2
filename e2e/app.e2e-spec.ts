import { Ngstar2Page } from './app.po';

describe('ngstar2 App', () => {
  let page: Ngstar2Page;

  beforeEach(() => {
    page = new Ngstar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { CjmappPage } from './app.po';

describe('cjmapp App', () => {
  let page: CjmappPage;

  beforeEach(() => {
    page = new CjmappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

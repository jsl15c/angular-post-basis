import { AngularPostBasisPage } from './app.po';

describe('angular-post-basis App', () => {
  let page: AngularPostBasisPage;

  beforeEach(() => {
    page = new AngularPostBasisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

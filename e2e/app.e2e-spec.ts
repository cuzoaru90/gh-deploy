import { GhDeployPage } from './app.po';

describe('gh-deploy App', () => {
  let page: GhDeployPage;

  beforeEach(() => {
    page = new GhDeployPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

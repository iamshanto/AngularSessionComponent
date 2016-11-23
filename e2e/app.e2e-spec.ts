import { ComponentSessionPage } from './app.po';

describe('component-session App', function() {
  let page: ComponentSessionPage;

  beforeEach(() => {
    page = new ComponentSessionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { PracticaA2Page } from './app.po';

describe('practica-a2 App', function() {
  let page: PracticaA2Page;

  beforeEach(() => {
    page = new PracticaA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

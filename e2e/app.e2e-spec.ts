import { EmojiClippyPage } from './app.po';

describe('emoji-clippy App', () => {
  let page: EmojiClippyPage;

  beforeEach(() => {
    page = new EmojiClippyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { getScreenSize } from './screenSize';

describe('#screenSize', () => {
  describe('#getScreenSize()', () => {
    it('should return mobile when inner width is in mobile breakpoint', () => {
      global.window.innerWidth = 500;
      const results = getScreenSize();
      expect(results).toEqual(1);
    });
    it('should return tablet when inner width is in tablet breakpoint', () => {
      global.window.innerWidth = 800;
      const results = getScreenSize();
      expect(results).toEqual(2);
    });
    it('should return desktop when inner width is in desktop breakpoint', () => {
      global.window.innerWidth = 1100;
      const results = getScreenSize();
      expect(results).toEqual(3);
    });
  });
});

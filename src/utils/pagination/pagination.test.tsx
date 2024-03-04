import { getPaginationConfig } from './pagination';

describe('getPaginationConfig', () => {
  const screenSizes = { MOBILE: 1, TABLET: 2, DESKTOP: 3 };

  it('should return the correct config for TABLET', () => {
    const result = getPaginationConfig(screenSizes.TABLET, screenSizes);

    expect(result).toEqual(12);
  });

  it('should return the correct config for DESKTOP', () => {
    const result = getPaginationConfig(screenSizes.DESKTOP, screenSizes);

    expect(result).toEqual(18);
  });

  it('should return the correct config for MOBILE', () => {
    const result = getPaginationConfig(screenSizes.MOBILE, screenSizes);

    expect(result).toEqual(100);
  });
});

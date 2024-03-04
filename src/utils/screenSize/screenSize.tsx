export const screenSizes = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 3,
};

export const getScreenSize = (): number => {
  if (window.innerWidth >= 1024) return screenSizes.DESKTOP;
  if (window.innerWidth >= 768) return screenSizes.TABLET;
  return screenSizes.MOBILE;
};

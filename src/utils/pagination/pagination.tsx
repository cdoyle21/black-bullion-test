export const getPaginationConfig = (
  currentView: number,
  screenSizes: { MOBILE: number; TABLET: number; DESKTOP: number },
): number => {
  switch (currentView) {
    case screenSizes.TABLET:
      return 12;
    case screenSizes.DESKTOP:
      return 18;
    default:
      return 100;
  }
};

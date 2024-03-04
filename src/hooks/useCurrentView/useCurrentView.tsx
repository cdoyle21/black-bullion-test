import { useState } from 'react';
import { getScreenSize } from '../../utils/screenSize/screenSize';
import useWindowResize from '../useWindowResize';
import { isWindowDefined } from '../../utils/window/window';

const getWindowScreenSize = (): number => {
  const windowDefined = isWindowDefined();

  if (!windowDefined) {
    return 1;
  }

  return getScreenSize();
};

const useCurrentView = () => {
  const [currentView, setCurrentView] = useState<number>(1);

  // Update the current view size on window resize
  const updateCurrentViewOnResize = (): void => {
    const screenSize = getWindowScreenSize();
    setCurrentView(screenSize);
  };

  useWindowResize(updateCurrentViewOnResize);

  return currentView;
};

export default useCurrentView;

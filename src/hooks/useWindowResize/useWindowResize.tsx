import { throttle } from 'lodash';
import { useEffect } from 'react';
import { isWindowDefined } from '../../utils/window/window';

const useWindowResize = (onResize: () => void) => {
  const windowDefined = isWindowDefined();

  useEffect(() => {
    const getResizeListener = () => {
      const throttleDelay = 200;

      return throttle(onResize, throttleDelay, { trailing: true });
    };

    const resizeListener = getResizeListener();

    resizeListener();

    if (windowDefined) {
      window.addEventListener('resize', resizeListener);
    }

    return () => {
      if (windowDefined) {
        window.removeEventListener('resize', resizeListener);
      }
    };
  }, [windowDefined, onResize]);
};

export default useWindowResize;

import { act, renderHook } from '@testing-library/react';
import useCurrentView from './useCurrentView';
import useWindowResize from '../useWindowResize';
import { isWindowDefined } from '../../utils/window/window';
import { getScreenSize } from '../../utils/screenSize/screenSize';

jest.mock('../../utils/window/window');
jest.mock('../useWindowResize');
jest.mock('../../utils/screenSize/screenSize', () => ({
  getScreenSize: jest.fn(),
}));

describe('useCurrentView', () => {
  beforeEach(() => {
    (isWindowDefined as jest.Mock).mockReturnValue(true);
    (useWindowResize as jest.Mock).mockClear();
    (getScreenSize as jest.Mock).mockClear();
  });

  it('should update currentView on window resize', () => {
    (getScreenSize as jest.Mock).mockReturnValue(3);

    const { result } = renderHook(() => useCurrentView());
    act(() => {
      (useWindowResize as jest.Mock).mock.calls[0][0](); // Manually trigger the window resize callback
    });

    expect(result.current).toBe(3);
    expect(getScreenSize).toHaveBeenCalled();
  });

  it('should return 1 when window is not defined', () => {
    (isWindowDefined as jest.Mock).mockReturnValue(false);

    const { result } = renderHook(() => useCurrentView());

    expect(result.current).toBe(1);
    expect(getScreenSize).not.toHaveBeenCalled();
  });
});

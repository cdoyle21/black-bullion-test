import { render, act } from '@testing-library/react';
import useWindowResize from './useWindowResize';

interface ComponentWithResizeListenerProps {
  onResize: () => void;
}

const ComponentWithResizeListener = ({ onResize }: ComponentWithResizeListenerProps) => {
  useWindowResize(onResize);

  return <div>Component content</div>;
};

describe('#useWindowResize', () => {
  const triggerResize = () => {
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
  };

  it('should add and remove event listener', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const onResizeMock = jest.fn();

    const { unmount } = render(<ComponentWithResizeListener onResize={onResizeMock} />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('should call throttled onResize', () => {
    const onResizeMock = jest.fn();

    render(<ComponentWithResizeListener onResize={onResizeMock} />);

    const resizeTriggerCount = 5;

    for (let i = 0; i < resizeTriggerCount; i += 1) {
      triggerResize();
    }

    expect(onResizeMock).toHaveBeenCalledTimes(1);
  });
});

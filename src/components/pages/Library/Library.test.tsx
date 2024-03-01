import React from 'react';
import { render } from '@testing-library/react';

import Library from './Library';

const renderComponent = () => {
  return render(<Library />);
};

describe('Library Component', () => {
  describe('Renders Library Element', () => {
    it('should render the component', () => {
      const { container } = renderComponent();
      expect(container).toBeDefined();
    });
  });
});

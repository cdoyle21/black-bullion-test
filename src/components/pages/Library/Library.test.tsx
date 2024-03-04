import React from 'react';
import { render, screen } from '@testing-library/react';

import Library from './Library';
import { mockedPathwayData } from '../../../testUtils/mockedPathwayData';

const renderComponent = () => {
  return render(<Library pathways={mockedPathwayData} />);
};

describe('Library Component', () => {
  describe('Renders Library Element', () => {
    it('should render the component', () => {
      renderComponent();

      expect(screen.getByTestId('LibraryGrid')).toBeInTheDocument();
      expect(screen.getAllByTestId('LibraryGridItem')).toHaveLength(mockedPathwayData.length);
    });

    it('renders Pagination component when not on mobile', () => {
      render(<Library pathways={mockedPathwayData} />);
      const pagination = screen.getByTestId('PaginationContainer');
      expect(pagination).toBeInTheDocument();
    });

    it('does not render Pagination component on mobile', () => {
      global.window.innerWidth = 767;

      render(<Library pathways={mockedPathwayData} />);
      const pagination = screen.queryByTestId('PaginationContainer');
      expect(pagination).toBeNull();
    });
  });
});

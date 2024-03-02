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
  });
});

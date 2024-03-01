import React from 'react';
import { render, screen } from '@testing-library/react';

import Library from './Library';
import { PathwayType } from '../../../components/services/pathways';

const mockedData = [
  {
    id: 1,
    title: 'Learn React',
    internal_title: 'Learn React',
    url: '/react-pathway',
    intro: 'A comprehensive React learning pathway.',
    duration: '6 months',
    image: 'path/to/image.jpg',
    type: PathwayType.PATHWAY,
    has_summative_assessment: false,
  },
  {
    id: 2,
    title: 'Learn React',
    internal_title: 'Learn React',
    url: '/react-pathway',
    intro: 'A comprehensive React learning pathway.',
    duration: '6 months',
    image: 'path/to/image.jpg',
    type: PathwayType.PATHWAY,
    has_summative_assessment: false,
  },
];

const renderComponent = () => {
  return render(<Library pathways={mockedData} />);
};

describe('Library Component', () => {
  describe('Renders Library Element', () => {
    it('should render the component', () => {
      renderComponent();

      expect(screen.getByTestId('LibraryGrid')).toBeInTheDocument();
      expect(screen.getAllByTestId('LibraryGridItem')).toHaveLength(mockedData.length);
    });
  });
});

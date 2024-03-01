import React from 'react';
import { render, screen } from '@testing-library/react';
import PathwayItem from './PathwayItem';
import { PathwayType } from '../../../components/services/pathways';

const mockPathway = {
  id: 1,
  title: 'Learn React',
  internal_title: 'Learn React',
  url: '/react-pathway',
  intro: 'A comprehensive React learning pathway.',
  duration: '6 months',
  image: 'path/to/image.jpg',
  type: PathwayType.PATHWAY,
  has_summative_assessment: false,
};

describe('PathwayItem', () => {
  it('renders pathway item with correct content', () => {
    render(<PathwayItem pathway={mockPathway} />);

    expect(screen.getByTestId('PathwayItem')).toBeInTheDocument();
    expect(screen.getByAltText(`${mockPathway.title}_pathway`)).toBeInTheDocument();
    expect(screen.getByTestId('PathwayItem-Type')).toHaveTextContent('Pathway');
    expect(screen.getByTestId('PathwayItem-Duration')).toHaveTextContent('6 months');
    expect(screen.getByTestId('PathwayItem-Title')).toHaveTextContent('Learn React');
    expect(screen.getByTestId('PathwayItem-Intro')).toHaveTextContent(
      'A comprehensive React learning pathway.',
    );
    expect(screen.getByText('View pathway')).toBeInTheDocument();
  });

  it('navigates to the correct pathway URL when clicked', () => {
    render(<PathwayItem pathway={mockPathway} />);

    const viewPathwayLink = screen.getByTestId('PathwayItem-ViewPathwayLink');

    expect(viewPathwayLink).toHaveAttribute('href', '/react-pathway');
  });
});

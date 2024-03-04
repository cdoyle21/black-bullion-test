import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination, { Props } from './Pagination';

describe('Pagination component', () => {
  const defaultProps: Props = {
    activeCarousel: jest.fn(),
    carouselNumber: 1,
    totalCarousels: 3,
  };

  it('renders without crashing', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);
    expect(getByTestId('PaginationContainer')).toBeInTheDocument();
  });

  it('disables the left arrow on the first carousel', () => {
    const { getAllByRole } = render(<Pagination {...defaultProps} />);
    const leftArrow = getAllByRole('button')[0];
    expect(leftArrow).toHaveStyle(`cursor: initial; opacity: 0.5`);
  });

  it('enables the left arrow when not on the first carousel', () => {
    const { getAllByRole } = render(<Pagination {...defaultProps} carouselNumber={2} />);
    const leftArrow = getAllByRole('button')[0];
    expect(leftArrow).toHaveStyle(`cursor: pointer; opacity: 1`);
  });

  it('disables the right arrow on the last carousel', () => {
    const { getAllByRole } = render(<Pagination {...defaultProps} carouselNumber={3} />);
    const rightArrow = getAllByRole('button')[1];
    expect(rightArrow).toHaveStyle(`cursor: initial; opacity: 0.5`);
  });

  it('enables the right arrow when not on the last carousel', () => {
    const { getAllByRole } = render(<Pagination {...defaultProps} />);
    const rightArrow = getAllByRole('button')[1];
    expect(rightArrow).toHaveStyle(`cursor: pointer; opacity: 1`);
  });

  it('calls activeCarousel with the correct value when clicking the left arrow', () => {
    const { getByAltText } = render(<Pagination {...defaultProps} carouselNumber={2} />);
    const leftArrow = getByAltText('arrow_left');
    fireEvent.click(leftArrow!);
    expect(defaultProps.activeCarousel).toHaveBeenCalledWith(1);
  });

  it('calls activeCarousel with the correct value when clicking the right arrow', () => {
    const { getByAltText } = render(<Pagination {...defaultProps} />);
    const rightArrow = getByAltText('arrow_right');
    fireEvent.click(rightArrow.parentElement!);
    expect(defaultProps.activeCarousel).toHaveBeenCalledWith(2);
  });
});

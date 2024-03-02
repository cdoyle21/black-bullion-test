import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PathwaySortingAndFiltering, { Props } from './PathwaySortingAndFiltering';
import { mockedPathwayData } from '../../../testUtils/mockedPathwayData';
import {
  handleFilterByOnSelectionChange,
  handleSortByOnSelectionChange,
} from '../../../utils/pathwaySortingAndFilteringUtils/pathwaySortingAndFilteringUtils';

jest.mock('../../../utils/pathwaySortingAndFilteringUtils/pathwaySortingAndFilteringUtils', () => ({
  handleFilterByOnSelectionChange: jest.fn(),
  handleSortByOnSelectionChange: jest.fn(),
}));

describe('PathwaySortingAndFiltering', () => {
  const mockSetFilteredData = jest.fn();

  const defaultProps: Props = {
    pathways: mockedPathwayData,
    filteredPathways: mockedPathwayData,
    setFilteredData: mockSetFilteredData,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    expect(screen.getByLabelText('filter by items')).toBeInTheDocument();
    expect(screen.getByLabelText('sort by items')).toBeInTheDocument();
    expect(screen.getByLabelText('Clear sorting and filters')).toBeInTheDocument();
  });

  it('handles filter by selection change', () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('filter by items'));
    fireEvent.click(screen.getByLabelText('Pathway type'));

    expect(handleFilterByOnSelectionChange).toHaveBeenCalledWith(mockedPathwayData, 'type');
  });

  it('handles filter by selection change', () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('filter by items'));
    fireEvent.click(screen.getByLabelText('Has summative assessment'));

    expect(handleFilterByOnSelectionChange).toHaveBeenCalledWith(
      mockedPathwayData,
      'has_summative_assessment',
    );
  });

  it('handles sort by selection change', async () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('sort by items'));
    fireEvent.click(screen.getByLabelText('Pathway title'));

    expect(handleSortByOnSelectionChange).toHaveBeenCalledWith(mockedPathwayData, 'title');
  });

  it('handles sort by selection change', async () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('sort by items'));
    fireEvent.click(screen.getByLabelText('Pathway duration'));

    expect(handleSortByOnSelectionChange).toHaveBeenCalledWith(mockedPathwayData, 'duration');
  });

  it('handles clear button click', () => {
    render(<PathwaySortingAndFiltering {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Clear sorting and filters'));

    expect(mockSetFilteredData).toHaveBeenCalledWith(mockedPathwayData);
  });
});

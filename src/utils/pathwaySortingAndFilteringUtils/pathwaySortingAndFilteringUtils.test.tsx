import {
  handleSortByOnSelectionChange,
  handleFilterByOnSelectionChange,
} from '../../utils/pathwaySortingAndFilteringUtils/pathwaySortingAndFilteringUtils';
import { PathwayType } from '../../components/services/pathways';
import { mockedPathwayData } from '../../testUtils/mockedPathwayData';

describe('handleSortByOnSelectionChange', () => {
  it('sorts by title', () => {
    const result = handleSortByOnSelectionChange(mockedPathwayData, 'title');
    expect(result).toEqual([
      {
        id: 2,
        title: 'Learn Angular',
        internal_title: 'Learn Angular',
        url: '/angular-pathway',
        intro: 'A comprehensive Angular learning pathway.',
        duration: '3 months',
        image: 'path/to/image.jpg',
        type: PathwayType.PATHWAY,
        has_summative_assessment: true,
      },
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
    ]);
  });

  it('sorts by duration', () => {
    const result = handleSortByOnSelectionChange(mockedPathwayData, 'duration');
    expect(result).toEqual([
      {
        id: 2,
        title: 'Learn Angular',
        internal_title: 'Learn Angular',
        url: '/angular-pathway',
        intro: 'A comprehensive Angular learning pathway.',
        duration: '3 months',
        image: 'path/to/image.jpg',
        type: PathwayType.PATHWAY,
        has_summative_assessment: true,
      },
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
    ]);
  });

  it('returns the original data for unknown sort value', () => {
    const result = handleSortByOnSelectionChange(mockedPathwayData, 'unknownValue');
    expect(result).toEqual(mockedPathwayData);
  });
});

describe('handleFilterByOnSelectionChange', () => {
  it('filters by has_summative_assessment', () => {
    const result = handleFilterByOnSelectionChange(mockedPathwayData, 'has_summative_assessment');
    expect(result).toEqual([
      {
        id: 2,
        title: 'Learn Angular',
        internal_title: 'Learn Angular',
        url: '/angular-pathway',
        intro: 'A comprehensive Angular learning pathway.',
        duration: '3 months',
        image: 'path/to/image.jpg',
        type: PathwayType.PATHWAY,
        has_summative_assessment: true,
      },
    ]);
  });

  it('filters by type', () => {
    const result = handleFilterByOnSelectionChange(mockedPathwayData, 'type');
    expect(result).toEqual([
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
        title: 'Learn Angular',
        internal_title: 'Learn Angular',
        url: '/angular-pathway',
        intro: 'A comprehensive Angular learning pathway.',
        duration: '3 months',
        image: 'path/to/image.jpg',
        type: PathwayType.PATHWAY,
        has_summative_assessment: true,
      },
    ]);
  });

  it('returns the original data for unknown filter value', () => {
    const result = handleFilterByOnSelectionChange(mockedPathwayData, 'unknownValue');
    expect(result).toEqual(mockedPathwayData);
  });
});

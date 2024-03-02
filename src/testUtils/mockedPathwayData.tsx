import { PathwayType } from '../components/services/pathways';

export const mockedPathwayData = [
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
];

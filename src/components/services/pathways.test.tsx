const axios = require('axios');
import { PathwayType, getPathways } from './pathways';

jest.mock('axios');
describe('pathways', () => {
  describe('#getPathways', () => {
    const mockUrl = 'test.co.uk/url';
    it('should return the correct response', async () => {
      const mockedData = {
        data: [
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
        ],
        message: 'Success',
        success: true,
      };

      axios.mockImplementationOnce(() => Promise.resolve(mockedData));
      await expect(getPathways(mockUrl)).resolves.toEqual(mockedData.data);
    });

    it('should return empty array when no response returned', async () => {
      const mockedData = {};
      axios.mockImplementationOnce(() => Promise.resolve(mockedData));
      await expect(getPathways(mockUrl)).resolves.toEqual([]);
    });

    it('should throw error if request fails', async () => {
      const mockedError = new Error('mock error');
      axios.mockImplementationOnce(() => Promise.reject(mockedError));
      await expect(getPathways(mockUrl)).rejects.toThrow(mockedError);
    });
  });
});

import axios from 'axios';

enum PathwayType {
  PATHWAY = 'pathway',
}

export interface Pathway {
  id: number;
  title: string;
  internal_title: string;
  url: string;
  intro: string;
  duration: string;
  image: string;
  type: PathwayType;
  has_summative_assessment: boolean;
}

export const getPathways = async (pathwaysServiceURL?: string): Promise<Pathway[] | []> => {
  try {
    const { data: response } = await axios({
      method: 'get',
      url: `${pathwaysServiceURL}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    });

    if (response) {
      return response;
    }

    return [];
  } catch (error) {
    console.log('Catalogue service error: ', error);
    throw error;
  }
};

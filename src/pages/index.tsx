import { Pathway, getPathways } from '@/components/services/pathways';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const Library = dynamic(() => import('../components/pages/Library'));

interface Props {
  pathways: Pathway[] | [];
}

export const getServerSideProps: GetServerSideProps = async ({}): Promise<{ props: Props }> => {
  try {
    const { PATHWAYS_SERVICE_LOCATION } = process.env;

    const pathways = await getPathways(PATHWAYS_SERVICE_LOCATION);

    return {
      props: {
        pathways,
      },
    };
  } catch (error) {
    console.log('error fetching Subtopic page - Explore tab data: ', error);
    return {
      props: {
        pathways: [],
      },
    };
  }
};

const Home: FC<Props> = ({ pathways }) => {
  console.log(pathways);
  return (
    <main>
      <Library />
    </main>
  );
};

export default Home;

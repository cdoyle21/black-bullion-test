import { Pathway, getPathways } from '../components/services/pathways';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

const PathwaySortingAndFiltering = dynamic(
  () => import('../components/organisms/PathwaySortingAndFiltering/PathwaySortingAndFiltering'),
);
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
    console.log('error fetching Library page', error);
    return {
      props: {
        pathways: [],
      },
    };
  }
};

const Home: FC<Props> = ({ pathways }) => {
  const [filteredData, setFilteredData] = useState(pathways);

  return (
    <>
      <PathwaySortingAndFiltering
        pathways={pathways}
        filteredPathways={filteredData}
        setFilteredData={setFilteredData}
      />
      <Library pathways={filteredData} />
    </>
  );
};

export default Home;

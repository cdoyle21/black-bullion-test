import React, { FC, useState } from 'react';
import { GridContainer, Item, PaginationWrapper } from './Library.styles';
import { Pathway } from '../../../components/services/pathways';
import PathwayItem from '../../../components/molecules/PathwayItem';
import Pagination from '../../../components/molecules/Pagination';
import { getPaginationConfig } from '../../../utils/pagination/pagination';
import useCurrentView from '../../../hooks/useCurrentView';
import { screenSizes } from '../../../utils/screenSize/screenSize';

export interface Props {
  pathways: Pathway[] | [];
}

const Library: FC<Props> = ({ pathways }) => {
  const currentView = useCurrentView();
  const isMobile = currentView === screenSizes.MOBILE;
  const [activeCarousel, setActiveCarousel] = useState(1);

  const carouselConfig = getPaginationConfig(currentView, screenSizes);
  const totalCarousels = Math.ceil(pathways.length / carouselConfig);

  return (
    <>
      <GridContainer data-testid="LibraryGrid">
        {pathways.map((pathway: Pathway, index) => (
          <Item key={pathway.id} data-testid="LibraryGridItem">
            <PathwayItem
              pathway={pathway}
              isVisible={
                index >= (activeCarousel - 1) * carouselConfig &&
                index < activeCarousel * carouselConfig
              }
            />
          </Item>
        ))}
      </GridContainer>
      {!isMobile && (
        <PaginationWrapper>
          <Pagination
            activeCarousel={setActiveCarousel}
            carouselNumber={activeCarousel}
            totalCarousels={totalCarousels}
          />
        </PaginationWrapper>
      )}
    </>
  );
};

export default Library;

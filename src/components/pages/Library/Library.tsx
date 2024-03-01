import React, { FC } from 'react';
import { GridContainer, Item } from './Library.styles';
import { Pathway } from '../../../components/services/pathways';
import PathwayItem from '../../../components/molecules/PathwayItem';

export interface Props {
  pathways: Pathway[] | [];
}

const Library: FC<Props> = ({ pathways }) => {
  return (
    <GridContainer data-testid="LibraryGrid">
      {pathways.map((pathway: Pathway) => (
        <Item key={pathway.id} data-testid="LibraryGridItem">
          <PathwayItem pathway={pathway} />
        </Item>
      ))}
    </GridContainer>
  );
};

export default Library;

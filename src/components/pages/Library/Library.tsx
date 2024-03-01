import React, { FC } from 'react';
import { Container } from './Library.styles';
import { Pathway } from '../../../components/services/pathways';
import PathwayItem from '../../../components/molecules/PathwayItem';

export interface Props {
  pathways: Pathway[] | [];
}

const Library: FC<Props> = ({ pathways }) => {
  const pathway = pathways[1];
  return (
    <Container>
      <PathwayItem pathway={pathway} />
    </Container>
  );
};

export default Library;

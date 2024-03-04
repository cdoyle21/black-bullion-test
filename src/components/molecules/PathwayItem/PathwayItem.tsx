import React, { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Container,
  ImageWrapper,
  TypeDurationWrapper,
  Type,
  Duration,
  Title,
  IntroWrapper,
  Intro,
  ViewPathwayWrapper,
} from './PathwayItem.styles';
import { Pathway } from '../../../components/services/pathways';
import OptimisedImageWithFallback from '../../../components/atoms/OptimisedImageWithFallback';
import ArrowRight from '../../../../public/icons8-arrow-right-24.png';
import BookIcon from '../../../../public/icons8-book-30.png';

export interface Props {
  pathway: Pathway;
  isVisible?: boolean;
}

const PathwayItem: FC<Props> = ({ pathway, isVisible = true }) => {
  const { image, type, duration, title, intro, url } = pathway;

  return (
    <Container isVisible={isVisible} data-testid="PathwayItem">
      <NextLink href={url}>
        <ImageWrapper>
          <OptimisedImageWithFallback src={image} alt={`${title}_pathway`} height={150} />
        </ImageWrapper>
      </NextLink>
      <TypeDurationWrapper>
        <Image src={BookIcon} alt={'book_icon'} />
        <Type data-testid="PathwayItem-Type">
          {type.charAt(0).toUpperCase() + type.slice(1)} &#903;
        </Type>
        <Duration data-testid="PathwayItem-Duration">{duration}</Duration>
      </TypeDurationWrapper>
      <NextLink href={url}>
        <Title data-testid="PathwayItem-Title">{title}</Title>
      </NextLink>
      <IntroWrapper>
        <Intro data-testid="PathwayItem-Intro">{intro}</Intro>
      </IntroWrapper>
      <NextLink href={url} data-testid="PathwayItem-ViewPathwayLink">
        <ViewPathwayWrapper>
          View pathway
          <Image src={ArrowRight} alt={'arrow_right'} />
        </ViewPathwayWrapper>
      </NextLink>
    </Container>
  );
};

export default PathwayItem;

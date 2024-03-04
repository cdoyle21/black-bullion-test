import React, { FC } from 'react';
import Image from 'next/image';
import { Container, ArrowWrapper } from './Pagination.styles';
import ArrowRight from '../../../../public/icons8-right-arrow-30.png';
import ArrowLeft from '../../../../public/icons8-left-arrow-30.png';

export interface Props {
  activeCarousel: (carouselSelected: number) => any;
  carouselNumber?: number;
  totalCarousels?: number;
}

const Pagination: FC<Props> = ({ activeCarousel, carouselNumber = 1, totalCarousels }) => {
  const handleClick = (increment: boolean) => {
    const nextCarouselNumber = increment ? carouselNumber + 1 : carouselNumber - 1;
    activeCarousel(nextCarouselNumber);
  };

  const isFirstCarousel = carouselNumber === 1;
  const isLastCarousel = carouselNumber === totalCarousels;

  return (
    <Container data-testid="PaginationContainer">
      {isFirstCarousel ? (
        <ArrowWrapper disabledArrow>
          <Image src={ArrowLeft} alt={'arrow_left'} />
        </ArrowWrapper>
      ) : (
        <ArrowWrapper onClick={() => handleClick(false)}>
          <Image src={ArrowLeft} alt={'arrow_left'} />
        </ArrowWrapper>
      )}
      {isLastCarousel ? (
        <ArrowWrapper disabledArrow>
          <Image src={ArrowRight} alt={'arrow_right'} />
        </ArrowWrapper>
      ) : (
        <ArrowWrapper onClick={() => handleClick(true)}>
          <Image src={ArrowRight} alt={'arrow_right'} />
        </ArrowWrapper>
      )}
    </Container>
  );
};

export default Pagination;

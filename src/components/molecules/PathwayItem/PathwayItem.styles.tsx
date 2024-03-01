import styled from 'styled-components';

export const Container = styled.div`
  grid-column: auto;
  width: 100%;
  padding: 20px 20px 15px;
  max-width: 285px;
`;

export const ImageWrapper = styled.div`
  & > img {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 6px;
  }
`;

export const TypeDurationWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;
  font-weight: 600;

  & > img {
    width: 15px;
    height: 15px;
    margin-right: 3px;
  }
`;

export const Type = styled.span`
  margin-right: 3px;
`;

export const Duration = styled.span``;

export const Title = styled.h1`
  height: 55px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  margin-bottom: 10px;
`;

export const IntroWrapper = styled.div`
  margin-bottom: 10px;
  opacity: 0.5;
  min-height: 54px;
`;

export const Intro = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  font-weight: 700;
  line-height: 1.5;
`;

export const ViewPathwayWrapper = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

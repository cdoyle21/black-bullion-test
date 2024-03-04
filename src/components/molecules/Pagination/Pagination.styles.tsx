import styled from 'styled-components';

interface ArrowProps {
  disabledArrow?: boolean;
}

export const Container = styled.div``;

export const ArrowWrapper = styled.button<ArrowProps>`
  background: none;
  border: 5px solid #582f7e;
  border-radius: 10px;
  margin: 20px;
  cursor: ${({ disabledArrow }): string => (disabledArrow ? 'initial' : 'pointer')};
  opacity: ${({ disabledArrow }): string => (disabledArrow ? '0.5 ' : '1')};

  & > img {
    width: 60px;
    height: 60px;
  }
`;

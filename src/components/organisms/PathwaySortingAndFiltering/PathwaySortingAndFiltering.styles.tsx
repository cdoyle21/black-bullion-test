import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 15px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #582f7e;
  background: white;
  color: #582f7e;
  user-select: none;
  padding: 8px 8px 8px 8px;

  &:hover {
    color: blue;
  }

  &:focus {
    color: blue;
  }

  @media only screen and (min-width: 768px) {
    border: 5px solid #582f7e;
    font-size: 2em;
  }
`;

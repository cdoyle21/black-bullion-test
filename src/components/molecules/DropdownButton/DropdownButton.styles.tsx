import styled from 'styled-components';
import { DropdownButtonProps } from './DropdownButton';

export const Container = styled.div`
  display: flex;
  position: relative;
  white-space: nowrap;
`;

export const Button = styled.button<{
  isOpen?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #582f7e;
  background: white;
  color: ${({ isOpen }): string => (isOpen ? 'blue' : '#582f7e')};
  user-select: none;
  padding: 8px 8px 8px 12px;

  &:hover {
    color: blue;
  }

  &:focus {
    color: blue;
  }
`;

export const DropdownMenuContainer = styled.div<{
  openMenuLocation: DropdownButtonProps['menuAlignment'];
}>`
  position: absolute;
  outline: none;
  width: auto;
  border-radius: 8px;
  border: 1px solid purple;
  background: white;
  right: ${({ openMenuLocation }) => (openMenuLocation === 'right' ? 0 : 'auto')};
  left: ${({ openMenuLocation }) => (openMenuLocation === 'left' ? 0 : 'auto')};
  z-index: 20;
  top: 35px;
`;

export const DropdownMenu = styled.div`
  margin: 0;
  padding: 8px 20px;
  outline: none;
`;

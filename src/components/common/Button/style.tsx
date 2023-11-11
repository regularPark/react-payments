import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'card';
}

const TYPE: Record<string, Record<string, string>> = {
  primary: {
    width: '80px',
    height: '40px',
    background: 'transparent',
  },
  card: {
    width: '210px',
    height: '110px',
    background: '#E5E5E5',
  },
};

export const BaseButton = styled.button<StyledButtonProps>`
  width: ${({ $variant }) => TYPE[$variant].width};
  height: ${({ $variant }) => TYPE[$variant].height};
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  ${({ $variant }) => css`
    border-radius: ${$variant ? '5px' : ''};
  `}

  background-color: ${({ $variant }) => TYPE[$variant].background};
`;

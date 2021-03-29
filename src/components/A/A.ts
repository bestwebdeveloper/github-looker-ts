import styled from 'styled-components/macro';

export const A = styled.a`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.4;
  }

  svg {
    bottom: -4px;
    position: relative;
  }
`;

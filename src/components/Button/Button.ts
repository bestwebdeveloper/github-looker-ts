import styled from 'styled-components/macro';

export const Button = styled.button`
  background: ${p => p.theme.primary};
  border: none;
  border-radius: 4px 4px 4px 4px;
  color: ${p => p.theme.background};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: calc(2.75rem + 4px);
  margin: 0 0 0 2rem;
  min-width: 5rem;
  outline: none;
  padding: 0 24px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
  
  &[disabled] {
    opacity: 0.3;
  }

  svg {
    vertical-align: middle;
  }
`;

import styled from 'styled-components/macro'

export const Input = styled.input`
  background-color: ${p => p.theme.background};
  border: 2px solid ${p => p.theme.border};
  border-radius: 4px;
  color: ${p => p.theme.text};
  display: block;
  font-size: 1rem;
  font-weight: 500;
  height: 2.75rem;
  line-height: 1.5;
  outline: none;
  padding: 0 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &::placeholder {
    color: ${p => p.theme.textSecondary};
    font-weight: 300;
  }

  &:focus {
    border-color: ${p => p.theme.primary};
    box-shadow: 0 0 0 3px ${p => p.theme.primary.replace(
            /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
            'rgba$1,0.2)',
    )};
  }
`

import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  color: ${p => p.theme.text};
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 2rem;
`;

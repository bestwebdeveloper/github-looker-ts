import styled from 'styled-components/macro';

export const ReposList = styled.div`
  align-items: stretch;
  display: flex;
  font-size: calc(0px + 2vmin);
`;

export const RepoColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 20%;
`;
export const CompareHeader = styled.div`
  border-right: 1px solid ${p => p.theme.primary};
  flex-grow: 1;
  font-weight: 600;
  padding: .3rem 0;
  text-align: left;
  white-space: nowrap;
`;

export const CompareCell = styled.div`
  flex-grow: 1;
  padding: .3rem 0;
  text-align: center;
  white-space: nowrap;
`;

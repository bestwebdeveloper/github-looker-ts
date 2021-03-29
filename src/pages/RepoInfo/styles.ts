import styled from 'styled-components/macro';

export const RepoTitle = styled.h1`
  word-break: break-all;
`

export const RepoFilesList = styled.ul`
  border: 2px solid ${p => p.theme.border};
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

export const RepoFilesListItem = styled.li`
  margin: 0.5rem;
  padding: 0;
`;

export const RepoReadme = styled.div`
  font-size: 0.8rem;
`

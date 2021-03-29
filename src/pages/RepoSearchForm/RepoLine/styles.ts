import styled from 'styled-components/macro';

import { A } from '../../../components/A';

export const RepoLink = styled(A)`
  border-radius: 8px;
  display: block;
  padding: 1rem;

  :hover {
    background-color: #eeeeee;
  }
`

export const ReposListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

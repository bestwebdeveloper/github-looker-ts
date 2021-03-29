import React from 'react';
import { Link } from 'react-router-dom';

import { Repo } from '../../../types/Repo';
import { RepoLink, ReposListItem } from './styles';

interface RepoLineProps {
  repo: Repo;
}

export function RepoLine({ repo }: RepoLineProps): JSX.Element {
  return <ReposListItem><Link component={RepoLink} to={`/info/${repo.owner.login}/${repo.name}`}>{repo.name}</Link></ReposListItem>
}

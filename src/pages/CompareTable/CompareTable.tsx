import React from 'react';

import { ReactComponent as NewWindowIcon } from '../../assets/new-window.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { A } from '../../components/A';
import { RepoInfo } from '../../types/Repo';
import { DeleteButton } from './DeleteButon';
import { Avatar, Name, StarCount } from './RepoItem/styles';
import { Row } from './Row';
import { ContributorAvatar, DeleteButtonWrapper } from './styles';

interface CompareTableProps {
  repos: RepoInfo[],
  onDeleteClick: (id: number) => void
}

export function CompareTable({ repos, onDeleteClick }: CompareTableProps): JSX.Element | null {
  return repos?.length > 0 ? (
    <>
      <Row key='name' header='' repos={repos}>
        {repos.map(repo => (
          <>
            <Avatar src={repo.info.owner.avatar_url} />
            <Name>
              {repo.info.name}
              <A href={repo.info.html_url} target='_blank' rel='noopener noreferrer'>
                <NewWindowIcon />
              </A>
            </Name>
            <DeleteButtonWrapper>
              <DeleteButton id={repo.info.id} onDeleteClick={onDeleteClick} />
            </DeleteButtonWrapper>
          </>
        ))}
      </Row>
      <Row key='contributors' header='Contributors' repos={repos}>
        {repos.map(repo => (
          <>
            {repo.contributors.slice(0, 6).map((contributor) => (
              <ContributorAvatar
                alt=''
                key={contributor.id}
                src={contributor.avatar_url}
                title={`${contributor.login}, ${contributor.contributions} contributions`}
              />
            ))}
          </>
        ))}
      </Row>
      <Row key='stars' header='Stars' repos={repos}>
        {repos.map(repo => (
          <StarCount>
            <StarIcon />
            {repo.info.stargazers_count}
          </StarCount>
        ))}
      </Row>
      <Row key='forks' field='forks' header='Forks' repos={repos} />
      <Row key='issues' field='open_issues' header='Open issues' repos={repos} />
      <Row key='subscribers' field='subscribers_count' header='Subscribers' repos={repos} />
      <Row key='watchers' field='watchers_count' header='Watchers' repos={repos} />
    </>
  ) : null
}

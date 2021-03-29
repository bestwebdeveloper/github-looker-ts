import React from 'react'

import { Repo, RepoInfo } from '../../../types/Repo'
import { CompareCell, CompareHeader, RepoColumn, ReposList } from './styles';

interface RowPros {
  children?: React.ReactNode,
  field?: keyof Repo,
  header: React.ReactNode,
  repos: RepoInfo[]
}

export function Row({ children, field, header, repos }: RowPros): JSX.Element {
  const childrenArray = React.Children.toArray(children)

  return (
    <ReposList>
      <RepoColumn key='0'>
        <CompareHeader>{header}</CompareHeader>
      </RepoColumn>
      {repos.map((repo, index) => (
        <RepoColumn key={repo.info.id}>
          <CompareCell>
            {field ? repo.info[field] : childrenArray[index]}
          </CompareCell>
        </RepoColumn>
      ))}
    </ReposList>
  )
}

import React from 'react';

import { ReactComponent as NewWindowIcon } from '../../../assets/new-window.svg';
import { ReactComponent as StarIcon } from '../../../assets/star.svg';
import { A } from '../../../components/A';
import { Avatar, Info, Name, StarCount, Wrapper } from './styles';

interface RepoItemProps {
  avatar: string;
  name: string;
  starCount: number;
  url: string;
}

export function RepoItem({ avatar, name, starCount, url }: RepoItemProps): JSX.Element {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <Info>
        <StarCount>
          <StarIcon />
          {starCount}
        </StarCount>
        <A href={url} target="_blank" rel="noopener noreferrer">
          <NewWindowIcon />
        </A>
      </Info>
    </Wrapper>
  );
}

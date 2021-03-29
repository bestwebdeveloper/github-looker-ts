import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Input } from '../../components/Input';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { useRepos } from '../../utils/repoService';
import { useDebounce } from '../../utils/useDebounce';
import { RepoLine } from './RepoLine';
import { ErrorText, Form, InputWrapper, Label, LoadingIndicatorWrapper, ReposList, Wrapper } from './styles';

export function RepoSearchForm(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const usernameDebounce = useDebounce<string>(username, 1500);
  const { error, data: repos, isLoading } = useRepos(usernameDebounce);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const onChangeUsername = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.currentTarget.value);
  }, []);

  const onSubmitForm = useCallback((evt?: React.FormEvent<HTMLFormElement>) => {
    if (evt !== undefined && evt.preventDefault !== undefined) {
      evt.preventDefault();
    }

    setUsername(username);
  }, [username]);

  return (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Label>Github Repo Viewer</Label>
        <InputWrapper>
          <Input
            placeholder='Type any Github user name to list repos'
            ref={inputRef}
            type='text'
            value={username}
            onChange={onChangeUsername}
          />
          {isLoading ? <LoadingIndicatorWrapper><LoadingIndicator small /></LoadingIndicatorWrapper> : null}
        </InputWrapper>
        {error ? (
          <ErrorText>{error.message}</ErrorText>
        ) : null}
      </Form>
      {isLoading ? <LoadingIndicator small /> : null}
      {!isLoading && repos && (
        repos.length > 0 ? (
          <ReposList>
            {repos.map(repo => <RepoLine key={repo.id} repo={repo} />)}
          </ReposList>
        ): 'User has no repos'
      )}
    </Wrapper>
  );
}

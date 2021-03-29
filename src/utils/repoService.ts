import { QueryObserverResult,useQuery } from 'react-query';

import {
  Contributor,
  Repo,
  RepoFile,
  RepoInfo,
  ReposGetReadmeResponse,
  UsersGetByUsernameResponse,
} from '../types/Repo';

const user = process.env.REACT_APP_GITHUB_USER;
const token = process.env.REACT_APP_GITHUB_TOKEN;
const headers = new Headers({
  Authorization: `Basic ${btoa(`${user}:${token}`)}`
});

async function fetchHelper<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);

  if (response.status !== 200) {
    throw new ResponseError(response);
  }

  return await response.json() as T;
}

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText || `Error: ${response.status}`);

    this.response = response;
  }
}

export function useRepos(username: string): QueryObserverResult<Repo[], Error> {
  return useQuery<Repo[], Error>(['repos', username], () => loadUserInfo(username), { enabled: username !== '' });
}

export function useRepoFiles(username: string, repo: string): QueryObserverResult<RepoFile[], Error> {
  return useQuery<RepoFile[], Error>(['files', username, repo], () => loadRepoFiles(`${username}/${repo}`), { enabled: username !== '' && repo !== '' });
}

export function useRepo(username: string, repo: string): QueryObserverResult<Repo, Error> {
  return useQuery<Repo, Error>(['repo', username, repo], () => loadRepoInfo(`${username}/${repo}`), { enabled: username !== '' && repo !== '' });
}

export function useReadme(username: string, repo: string): QueryObserverResult<ReposGetReadmeResponse, Error> {
  return useQuery<ReposGetReadmeResponse, Error>(['readme', username, repo], () => loadReadmeInfo(`${username}/${repo}`), { enabled: username !== '' && repo !== '' });
}

export async function loadUserInfo(user: string): Promise<Repo[]> {
  let userInfo;

  try {
    userInfo = await fetchHelper<UsersGetByUsernameResponse>(`https://api.github.com/users/${user}`, { headers });
  } catch (e) {
    throw new Error('No such user');
  }

  const repos: Repo[] = [];
  let page = 1;

  while (repos.length < userInfo.public_repos) {
    const userRepos = await fetchHelper<Repo[]>(`${userInfo.repos_url}?page=${page}&per_page=100`, { headers });

    if (userRepos.length > 0) {
      repos.push(...userRepos);
      page++;
    } else {
      break;
    }
  }

  return repos;
}

export async function loadRepo(user: string, repo: string): Promise<RepoInfo | null> {
  const info = await fetchHelper<Repo>(`https://api.github.com/repos/${repo}`, { headers });
  const contributors = await fetchHelper<Contributor[]>(`https://api.github.com/repos/${repo}/contributors`,{ headers });

  return { info, contributors };
}

async function loadRepoInfo(repo: string): Promise<Repo> {
  return await fetchHelper<Repo>(`https://api.github.com/repos/${repo}`, { headers });
}

async function loadRepoFiles(repo: string): Promise<RepoFile[]> {
  return await fetchHelper<RepoFile[]>(`https://api.github.com/repos/${repo}/contents`, { headers });
}

async function loadReadmeInfo(repo: string): Promise<ReposGetReadmeResponse> {
  return await fetchHelper<ReposGetReadmeResponse>(`https://api.github.com/repos/${repo}/readme`, { headers });
}

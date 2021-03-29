import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

import { A } from '../../components/A';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { decode } from '../../utils/base64';
import { useReadme, useRepo, useRepoFiles } from '../../utils/repoService';
import { RepoFilesList, RepoFilesListItem, RepoReadme, RepoTitle } from './styles';

export function RepoInfo(): JSX.Element {
  const { user, repo } = useParams<{ user: string, repo: string }>();
  const { isLoading: isInfoLoading, data: repoInfo } = useRepo(user, repo);
  const { isLoading: isRepoFilesLoading, data: repoFiles } = useRepoFiles(user, repo);
  const { isLoading: isRepoReadmeLoading, data: repoReadme } = useReadme(user, repo);
  const isLoading = isInfoLoading || isRepoFilesLoading || isRepoReadmeLoading;

  return (
    <>
      {isLoading ? <LoadingIndicator /> : null}
      {!isLoading && !!repoInfo ? (
        <>
          <RepoTitle><Link component={A} to='/'>&laquo;</Link> {repoInfo.full_name}</RepoTitle>
          <p>{repoInfo.description}</p>
        </>
      ) : null}
      {!isLoading && !!repoFiles ? (
        <RepoFilesList>
          {repoFiles.map(file => <RepoFilesListItem key={file.sha}>{file.name}</RepoFilesListItem>)}
        </RepoFilesList>
      ) : null}
      {!isLoading && !!repoReadme && !!repoReadme.content ? (
        <RepoReadme>
          <ReactMarkdown>
            {decode(repoReadme.content.replace(/\\n/g, ''))}
          </ReactMarkdown>
        </RepoReadme>
      ) : null}
    </>
  );
}

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RepoInfo } from '../../pages/RepoInfo';
import { RepoSearchForm } from '../../pages/RepoSearchForm';
import { Wrapper } from './styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

export function App(): JSX.Element {
  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <RepoSearchForm />
            </Route>
            <Route path='/compare'>
              {/*<ReposCompare />*/}
            </Route>
            <Route path='/info/:user/:repo'>
              <RepoInfo />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </Wrapper>
  );
}

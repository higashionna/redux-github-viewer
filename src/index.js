import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './styles'
import styled from 'styled-components'

import Header from './components/organisms/Header'

import Index from './components/pages/Index'
import Profile from './components/pages/Profile'
import Issue from './components/pages/Issue'
import PullRequest from './components/pages/PullRequest'

const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`

const App = () => (
    <Router basename='/redux-github-viewer'>
        <GlobalStyle />
        <Header />
        <Content>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/issue">
                    <Issue />
                </Route>
                <Route path="/pull-request">
                    <PullRequest />
                </Route>
                <Route exact path="/">
                    <Index />
                </Route>
            </Switch>
        </Content>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

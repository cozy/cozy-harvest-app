import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'

import { Home } from 'src/components/Home'
import { Konnector } from 'src/components/Konnector'

const App = () => {
  return (
    <HashRouter>
      <Layout monoColumn>
        <Main>
          <Content>
            <Switch>
              <Route path="/connected/:konnectorSlug" component={Konnector} />
              <Route path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          </Content>
        </Main>
      </Layout>
    </HashRouter>
  )
}

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default hot(module)(App)

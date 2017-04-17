// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Wrapper from './containers/Wrapper'
import Index from './containers/Index'
import Foo from './containers/Foo'
import DevTools from './containers/DevTools'
import history from './history'
import store from './store'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <div>
      <ConnectedRouter history={history}>
        <Wrapper>
          <Route exact path="/" component={Index} />
          <Route path="/foo" component={Foo} />
        </Wrapper>
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

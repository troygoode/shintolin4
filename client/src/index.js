// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Wrapper from './containers/Wrapper'
import Index from './containers/Index'
import Foo from './containers/Foo'
import DevTools from './containers/DevTools'
import store from './store'

import './index.css'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <div>
      <Router history={history}>
        <Route path="/" component={Wrapper}>
          <IndexRoute component={Index} />
          <Route path="foo" component={Foo} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistState } from 'redux-devtools'

import Wrapper from './containers/Wrapper'
import Index from './containers/Index'
import Foo from './containers/Foo'
import DevTools from './containers/DevTools'
import reducers from './reducers'

import './index.css'

// add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  {}, // initial state
  compose(
    applyMiddleware(thunk, logger()),
    DevTools.instrument(),
    persistState(() => {
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length > 0) ? matches[1] : null
    })
  )
)

// hot-swappable stuff
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  )
}

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

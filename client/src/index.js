// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Wrapper from './routes/Wrapper'
import Index from './routes/Index'
import Foo from './routes/Foo'

import './index.css'

// import reducers from '<project-path>/reducers'
const reducers = {} // TODO

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Index} />
        <Route path="foo" component={Foo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

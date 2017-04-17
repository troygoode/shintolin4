// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistState } from 'redux-devtools'

import DevTools from './containers/DevTools'
import reducers from './reducers'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  {}, // initial state
  compose(
    applyMiddleware(thunk, logger),
    DevTools.instrument(),
    persistState(() => {
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length > 0) ? matches[1] : null
    })
  )
)

// $FlowFixMe: not sure how to create a suitable definition for the module module
const hot = module.hot

// hot-swappable stuff
if (hot) {
  hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  )
}

export default store

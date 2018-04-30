// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistState } from 'redux-devtools'

import history from './history'
import DevTools from './containers/DevTools'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const initialState = {}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)),
    DevTools.instrument(),
    persistState(() => {
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length > 0) ? matches[1] : null
    })
  )
)

sagaMiddleware.run(rootSaga)

// $FlowFixMe: not sure how to create a suitable definition for the module module
const hot = module.hot

// hot-swappable stuff
if (hot) {
  hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  )
}

export default store

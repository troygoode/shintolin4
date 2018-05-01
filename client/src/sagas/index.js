// @flow

import type { Saga } from 'redux-saga'
import { all } from 'redux-saga/effects'

import { watchLogin } from './login'

export default function * rootSaga (): Saga<void> {
  // $FlowFixMe – no idea
  yield all([
    watchLogin()
  ])
}

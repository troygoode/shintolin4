// @flow

import { all } from 'redux-saga/effects'

import { watchLogin } from './login'

export default function * rootSaga () {
  yield all([
    watchLogin()
  ])
}

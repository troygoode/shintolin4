// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT, { IndexContainer } from './Index'

it('connects without crashing', () => {
  const div = document.createElement('div')

  // TODO
  const store = {
    dispatch: () => {},
    getState: () => {},
    subscribe: () => {}
  }

  ReactDOM.render(<UUT store={store} />, div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  const f1 = () => {}
  ReactDOM.render(<IndexContainer submitLogin={f1} />, div)
})

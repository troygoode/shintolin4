// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT, { Index } from './Index'

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
  ReactDOM.render(<Index action={f1} />, div)
})

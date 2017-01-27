// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './Index'

it('renders without crashing', () => {
  const div = document.createElement('div')

  // TODO
  const store = {
    dispatch: () => {},
    getState: () => {},
    subscribe: () => {}
  }

  ReactDOM.render(<UUT store={store} />, div)
})

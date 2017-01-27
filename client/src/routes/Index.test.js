/* global it:true */

import React from 'react'
import ReactDOM from 'react-dom'
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

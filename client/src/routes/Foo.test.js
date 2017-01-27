/* global it:true */

import React from 'react'
import ReactDOM from 'react-dom'
import UUT from './Foo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT />, div)
})

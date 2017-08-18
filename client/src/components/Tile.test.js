// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './Tile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT />, div)
})

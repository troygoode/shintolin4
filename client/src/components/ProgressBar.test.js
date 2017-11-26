// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './ProgressBar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT value={5} max={10} />, div)
})

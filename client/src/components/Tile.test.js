// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './Tile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT
    x={0}
    y={0}
    z={0}
    terrain='terrain'
    highlight={false}
    creatures={[]}
    players={[]}
    building={null}
    direction={null}
  />, div)
})

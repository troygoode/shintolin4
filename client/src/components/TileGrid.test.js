// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './TileGrid'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT
    centerX={0}
    centerY={0}
    radius={1}
    tiles={[]}
    navigateToTile={() => ({})}
    />, div)
})

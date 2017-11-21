import React from 'react'
import { withInfo } from '@storybook/addon-info'

import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'

const tiles = [
  {
    x: 0,
    y: -1,
    z: 0,
    terrain: 'grass',
    players: [],
    creatures: []
  },
  {
    x: -1,
    y: 0,
    z: 0,
    terrain: 'grass',
    players: [],
    creatures: [],
    direction: 'NW'
  },
  {
    x: 0,
    y: 1,
    z: 0,
    terrain: 'grass',
    building: 'Hut',
    players: [],
    creatures: [],
    direction: 'Enter'
  },
  {
    x: 1,
    y: 0,
    z: 0,
    terrain: 'grass',
    players: [],
    creatures: [],
    direction: 'NE'
  },
  {
    x: 0,
    y: 2,
    z: 0,
    terrain: 'grass',
    players: [],
    creatures: []
  }
]

export const MapStory = withInfo('MapStory')(({ onTileClick }) => {
  return (
    <div>
      <TileGrid
        centerX={0}
        centerY={1}
        radius={3}
        tiles={tiles}
        navigateToTile={onTileClick} />
    </div>
  )
})

export const TilesStory = withInfo('TilesStory')(({ onClick }) => {
  return (
    <div>
      <h2>Woodlands Tile w/ Everything</h2>
      <Tile {...tiles[0]} onClick={onClick} />
    </div>
  )
})

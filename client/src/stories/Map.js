import React from 'react'

import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'

const tiles = [
  {
    x: 0,
    y: 1,
    z: 0,
    terrain: 'grassland',
    building: 'Hut',
    peopleCount: 1,
    creatureCount: 1,
    direction: 'Enter'
  },
  {
    x: 1,
    y: 0,
    z: 0,
    terrain: 'default',
    peopleCount: 0,
    creatureCount: 0,
    direction: 'NE'
  }
]

export const MapStory = ({ onTileClick }) => {
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
}

export const TilesStory = ({ onClick }) => {
  return (
    <div>
      <h2>Woodlands Tile w/ Everything</h2>
      <Tile {...tiles[0]} onClick={onClick} />
    </div>
  )
}

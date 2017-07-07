import React from 'react'

import Pre from './helpers/pre'
import Tile from '../components/Tile'

export const Map = () => {
  const code = `
    <div>Hello World</div>
    <div>Hello World</div>
    <div>Hello World</div>
  `

  return (
    <div>
      <Tile />
      <Tile />
      <Tile />

      <p>Lorem ipsum dolor.</p>
      <Pre code={code} />
    </div>
  )
}

export const Tiles = () => {
  return (
    <div>
      <Tile />
    </div>
  )
}

export const DefaultTile = () => {
  return (
    <div>
      <Tile />
    </div>
  )
}

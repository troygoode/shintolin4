// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TileGrid.css'

import Tile from './Tile'

const range = (start, end) => {
  const retval = []
  for (let i = start; i < end; i++) {
    retval.push(i)
  }
  return retval
}

export default class TileGrid extends Component {
  static propTypes = {
    centerX: PropTypes.number.isRequired,
    centerY: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    tiles: PropTypes.array.isRequired,
    navigateToTile: PropTypes.func.isRequired
  }

  render () {
    const topY = this.props.centerY - (this.props.radius - 1)
    const leftX = this.props.centerX - (this.props.radius - 1)
    const width = (this.props.radius * 2) - 1
    const height = width
    const yRange = range(topY, topY + height)

    const TileSlot = ({ x, y }) => {
      const tile = this.props.tiles.find((t) => t.x === x && t.y === y) || {
        x,
        y,
        z: 0,
        terrain: 'default',
        peopleCount: 0,
        creatureCount: 0
      }
      return <div className='tile-grid-cell'><Tile {...tile} onClick={this.props.navigateToTile} /></div>
    }

    const Row = ({ y }) => {
      const xRange = range(leftX, leftX + width)
      return <div className='tile-grid-row'>
        {xRange.map((x) => <TileSlot key={x} x={x} y={y} />)}
      </div>
    }

    return (
      <div className='tile-grid'>
        {yRange.map((y) => <Row y={y} key={y} />)}
      </div>
    )
  }
}
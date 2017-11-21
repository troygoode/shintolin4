// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tile.css'
import './Tile-Terrain.css'

/*
 * What is a <Tile />?
 *
 * - square
 * - background image/class based on terrain
 * - some have a building on it
 * - some have the player character on it
 * - some have other players on it
 * - some have creatures on it
 * - can stack in a grid
 * - can have a button labelled with a cardinal direction, "Enter", or "Exit"
 *
 */

type Player = {
  name: string
}

type Creature = {
  name: string
}

type Props = {
  x: number,
  y: number,
  z: number,
  highlight: boolean,
  terrain: string,
  players: Array<Player>,
  creatures: Array<Creature>,
  building: ?string,
  direction: ?string,
  onClick: Function
}

export default class Tile extends Component<Props, *> {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    highlight: PropTypes.bool,
    terrain: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
    creatures: PropTypes.array.isRequired,
    building: PropTypes.string,
    direction: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const peopleCount = this.props.players.length
    const creatureCount = this.props.creatures.length
    const className = [
      'tile',
      this.props.highlight ? 'tile-highlight' : null,
      (this.props.direction && this.props.onClick) ? 'tile-clickable' : null,
      `tile-terrain-${this.props.terrain}`
    ].filter((c) => !!c).join(' ')
    const Direction = () => !this.props.direction ? null
      : <div className='tile-content'><div className='tile-direction-button'>{this.props.direction}</div></div>
    const Building = () => !this.props.building ? null
      : <div className='tile-content'><div className='tile-building'>{this.props.building}</div></div>
    const Creatures = () => creatureCount <= 0 ? null
      : <div className='tile-content'><div className='tile-creature-count'>{creatureCount}</div></div>
    const People = () => peopleCount <= 0 ? null
      : <div className='tile-content'><div className='tile-people-count'>{peopleCount}</div></div>

    // const navigate = (e) => {
    // e.preventDefault()
    // if (!this.props.direction || !this.props.onClick) {
    // return null
    // }
    // this.props.onClick({ x: this.props.x, y: this.props.y, z: this.props.z })
    // }

    return (
      <div className={className} onClick={this.props.direction ? this.props.onClick : null}>
        <Direction />
        <Building />
        <People />
        <Creatures />
      </div>
    )
  }
}

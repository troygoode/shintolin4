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

export default class Tile extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    terrain: PropTypes.string.isRequired,
    peopleCount: PropTypes.number.isRequired,
    creatureCount: PropTypes.number.isRequired,
    building: PropTypes.string,
    direction: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const className = [
      'tile',
      (this.props.direction && this.props.onClick) ? 'tile-clickable' : null,
      `tile-terrain-${this.props.terrain}`
    ].filter((c) => !!c).join(' ')
    const Direction = () => !this.props.direction ? null
      : <div className='tile-direction-button'>{this.props.direction}</div>
    const Building = () => !this.props.building ? null
      : <div className='tile-building'>{this.props.building}</div>
    const Creatures = () => this.props.creatureCount <= 0 ? null
      : <div className='tile-creature-count'>{this.props.creatureCount}</div>
    const People = () => this.props.peopleCount <= 0 ? null
      : <div className='tile-people-count'>{this.props.peopleCount}</div>
    const navigate = (e) => {
      e.preventDefault()
      if (!this.props.direction || !this.props.onClick) {
        return null
      }
      onClick({ x, y, z })
    }

    return (
      <div className={className} onClick={this.props.direction ? this.props.onClick : null}>
        <Building />
        <Direction />
        <Creatures />
        <People />
      </div>
    )
  }
}

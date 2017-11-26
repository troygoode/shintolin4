// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tile.css'
import './Tile-Terrain.css'

const LINE_ITEM_LIMIT = 5
const ITEM_COST = 1
const DIRECTION_COST = 2

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
  id: number,
  name: string
}

type Creature = {
  id: number,
  name: string
}

type TileRef = {
  direction: string,
  x: number,
  y: number,
  z: number
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
  onClick?: (TileRef) => void
}

const Direction = ({ direction }) => {
  return <div className='tile-content'><div className='tile-direction-button'>{direction}</div></div>
}

const Building = ({ building }) => {
  return <div className='tile-content'>
    <div className='tile-building'>
      <span>◾️ {building}</span>
    </div>
  </div>
}

const CreatureList = ({ creatures }) => {
  if (!creatures || !creatures.length) {
    return null
  }
  return creatures.map((creature) => {
    return <div key={creature.id} className='tile-content'><div className='tile-creature'>{creature.name}</div></div>
  })
}

const CreatureCount = ({ creatures }) => {
  if (!creatures || !creatures.length) {
    return null
  }
  return <div className='tile-content'><div className='tile-creature-count'>{creatures.length}</div></div>
}

const PlayerList = ({ players }) => {
  if (!players || !players.length) {
    return null
  }
  return players.map((player) => {
    return <div key={player.id} className='tile-content'><div className='tile-player'>{player.name}</div></div>
  })
}

const PlayerCount = ({ players }) => {
  if (!players || !players.length) {
    return null
  }
  return <div className='tile-content'><div className='tile-player-count'>{players.length}</div></div>
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
    const { direction, building, players, creatures, highlight, terrain, onClick } = this.props
    const showDirection = !!direction
    const showBuilding = !!building
    const showPlayers = players.length > 0
    const showCreatures = creatures.length > 0

    let limit = LINE_ITEM_LIMIT
    if (showDirection) {
      limit -= DIRECTION_COST
    }
    if (showBuilding) {
      limit -= ITEM_COST
    }

    let actorDisplay = 'none'
    if (players.length + creatures.length < limit) {
      actorDisplay = 'all'
    } else if ((creatures.length === 0 && players.length <= limit) || (players.length + 1 <= limit)) {
      actorDisplay = 'players'
    } else if ((players.length === 0 && creatures.length <= limit) || (creatures.length + 1 <= limit)) {
      actorDisplay = 'creatures'
    } else {
      actorDisplay = 'counts-only'
    }

    const className = [
      'tile',
      highlight ? 'tile-highlight' : null,
      (showDirection && onClick) ? 'tile-clickable' : null,
      `tile-terrain-${terrain}`
    ].filter((c) => !!c).join(' ')

    const handleClick = (e) => {
      if (!direction || !onClick) {
        return null
      }
      onClick({ direction, x: this.props.x, y: this.props.y, z: this.props.z })
    }

    return (
      <div className={className} onClick={handleClick}>
        {showDirection ? <Direction direction={direction} /> : null}
        {showBuilding ? <Building building={building} /> : null}
        {showPlayers && (actorDisplay === 'all' || actorDisplay === 'players')
          ? <PlayerList players={players} />
          : null}
        {showPlayers && (actorDisplay === 'creatures' || actorDisplay === 'counts-only')
          ? <PlayerCount players={players} />
          : null}
        {showCreatures && (actorDisplay === 'all' || actorDisplay === 'creatures')
          ? <CreatureList creatures={creatures} />
          : null}
        {showCreatures && (actorDisplay === 'players' || actorDisplay === 'counts-only')
          ? <CreatureCount creatures={creatures} />
          : null}
      </div>
    )
  }
}

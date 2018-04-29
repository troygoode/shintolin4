import React from 'react'
import { withInfo } from '@storybook/addon-info'

import Presence from '../components/Presence'

const examples = {
  friend: {
    name: 'Ecce',
    isFriend: true
  },

  neutral: {
    name: 'Neutral'
  },

  creature: {
    id: 'A1B2C3D',
    name: 'Creature'
  }
}

export const PresenceStory = withInfo('PresenceStory')(({ onClick }) => {
  return <div>
    <h2>Creature</h2>
    <Presence {...examples.creature} onClick={onClick} />

    <h2>Neutral</h2>
    <Presence {...examples.neutral} onClick={onClick} />

    <h2>Friend</h2>
    <Presence {...examples.friend} onClick={onClick} />

    <h2>List</h2>
    <div className='presence-list'>
      <Presence {...examples.creature} onClick={onClick} />
      <Presence {...examples.neutral} onClick={onClick} />
      <Presence {...examples.friend} onClick={onClick} />
    </div>
  </div>
})

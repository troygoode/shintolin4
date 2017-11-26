import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { TilesStory, MapStory } from './Map'
import { PresenceStory } from './Presence'
import { MessagesStory, InputStory, MessageListStory } from './Chat'
import { ProgressBarStory } from './ProgressBar'

storiesOf('Map', module)
  .add('Map', () => (
    <MapStory onTileClick={action('tile clicked')} />
  ))
  .add('Tiles', () => (
    <TilesStory onClick={action('clicked')} />
  ))

storiesOf('Chat', module)
  .add('Messages', () => (
    <MessagesStory />
  ))
  .add('Input', () => (
    <InputStory onSend={action('sent')} />
  ))
  .add('Message List + Input', () => (
    <MessageListStory onSend={action('sent')} />
  ))

storiesOf('ProgressBar', module)
  .add('ProgressBar', () => (
    <ProgressBarStory />
  ))

storiesOf('Presence', module)
  .add('Presence', () => (
    <PresenceStory onClick={action('clicked')} />
  ))

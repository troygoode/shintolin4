import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import { TilesStory, MapStory } from './Map'
import { PresenceStory } from './Presence'
import { MessagesStory, InputStory, MessageListStory } from './Chat'

storiesOf('Map', module)
  .add('Map', () => (
    <MapStory onTileClick={action('tile clicked')} />
  ))
  .add('Tiles', () => (
    <TilesStory onClick={action('clicked')} />
  ))

storiesOf('Presence', module)
  .add('Presence', () => (
    <PresenceStory onClick={action('clicked')} />
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

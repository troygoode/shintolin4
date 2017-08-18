import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import { Tiles, Map } from './Map'

storiesOf('Map', module)
  .add('Map', () => (
    <Map onTileClick={action('tile clicked')} />
  ))
  .add('Tiles', () => (
    <Tiles onClick={action('clicked')} />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import { Tiles, Map, DefaultTile } from './Map'
import Welcome from './Welcome'

storiesOf('Welcome', module)
  .add(null, () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Map', module)
  .add('Map', () => (
    <Map />
  ))
  .add('Tiles', () => (
    <Tiles />
  ))
  .add('Default Tile', () => (
    <DefaultTile />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

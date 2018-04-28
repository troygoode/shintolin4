import React from 'react'
import { withInfo } from '@storybook/addon-info'

import ProgressBar from '../components/ProgressBar'

export const ProgressBarStory = withInfo('ProgressBarStory')(() => {
  return <div>
    <h2>50%</h2>
    <div>
      <ProgressBar value={5} max={10} />
    </div>
    <div>
      <ProgressBar value={5} max={10} color='red' />
    </div>
    <div>
      <ProgressBar value={5} max={10} color='green' />
    </div>
    <div>
      <ProgressBar value={5} max={10} color='yellow' />
    </div>
    <div>
      <ProgressBar value={5} max={10} color='blue' />
    </div>

    <h2>Custom Text Mapping</h2>
    <div>
      <ProgressBar value={5} max={10} textMapper={() => 'example'} />
    </div>
    <div>
      <ProgressBar value={5} max={10} textMapper={() => ' '} />
    </div>
    <div>
      <ProgressBar value={5} max={10} textMapper={() => null} />
    </div>
  </div>
})

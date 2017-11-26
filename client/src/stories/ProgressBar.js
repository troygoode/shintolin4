import React from 'react'
import { withInfo } from '@storybook/addon-info'

import ProgressBar from '../components/ProgressBar'

export const ProgressBarStory = withInfo('ProgressBarStory')(() => {
  return <div>
    <ProgressBar value={5} max={10} />
  </div>
})

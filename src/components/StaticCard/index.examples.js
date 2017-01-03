import React from 'react'
import {storiesOf} from '@kadira/storybook'
import StaticCard from '.'

storiesOf('Static: Card')
  .addWithInfo('API', () => (
    <div>
      <StaticCard/>
    </div>
  ))

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import StaticCard from '.'

storiesOf('Static: Card')
  .addWithInfo('API', () => (
    <div>
      <div className='flex justify-center items-center bg-dark-navy pv5'>
        <StaticCard/>
      </div>
    </div>
  ))

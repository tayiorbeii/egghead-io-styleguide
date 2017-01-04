import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Card from '.'

storiesOf('Static: Cards')
  .addWithInfo('Course Card', () => (
    <div>
      <div className='flex justify-center items-center bg-dark-navy pv5'>
        <Card/>
      </div>
    </div>
  ))
  .addWithInfo('Lesson Card', () => (
    <div>
      <div className='flex justify-center items-center bg-dark-navy pv5'>
        <Card/>
      </div>
    </div>
  ))

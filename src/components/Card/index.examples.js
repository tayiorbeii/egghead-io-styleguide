import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Card from '.'

const representClasses = 'flex justify-center items-center bg-dark-navy pv5'

storiesOf('Static: Cards')
  .addWithInfo('Course Card', () => (
    <div className={representClasses}>
      <Card/>
    </div>
  ))
  .addWithInfo('Lesson Card', () => (
    <div className={representClasses}>
      <Card/>
    </div>
  ))

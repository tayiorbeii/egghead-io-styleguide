import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const buttonExampleList = [
  {
    children: 'Default'
  },
  {
    type: 'primary',
    size: 'cta',
    children: 'Primary'
  },
  {
    type: 'success',
    outline: true,
    children: 'Success'
  },
  {
    type: 'warning',
    size: 'small',
    children: 'Warning'
  },
  {
    type: 'danger',
    size: 'small',
    outline: true,
    children: 'Danger'
  }
]

const buttonTypeExamples = ['default', 'primary', 'success', 'warning', 'danger']

// Default Button
storiesOf('Button')
  .addWithInfo('Standard (Large)', `The Standard Button is available in several different flavors.`, () => (
    <div className='flex flex-row justify-center flex-wrap items-center'>
      {buttonTypeExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn} onClick={clickHandlerFixture}>
              {btn}
            </Button>
          </div>
        )
      })}
    </div>
  ))


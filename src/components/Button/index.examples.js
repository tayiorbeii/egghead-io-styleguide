import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const standardButtonExamples = [
  {type: 'default'},
  {type: 'primary'},
  {type: 'success'},
  {type: 'warning'},
  {type: 'danger'}
]

const dispStyles = 'flex flex-row content-center justify-center flex-wrap items-center vh-100 bg-navy'

// Standard Large Button (Default)
storiesOf('Button')
  .addWithInfo('Large (Default)', `The Large Default Button is available in several different flavors.`, () => (
    <div className={dispStyles}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type} onClick={clickHandlerFixture}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))

// Standard (Small) Button
storiesOf('Button')
  .addWithInfo('Small', `This Small Button is available in several different flavors.`, () => (
    <div className={dispStyles}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type} size='small' onClick={clickHandlerFixture}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))

// Standard (CTA) Button
storiesOf('Button')
  .addWithInfo('CTA', `The CTA Button is sized for callouts.`, () => (
    <div className={dispStyles}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type} size='cta' onClick={clickHandlerFixture}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))


// Outline Button
storiesOf('Button')
  .addWithInfo('Outline', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div className={dispStyles}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type} outline onClick={clickHandlerFixture}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))

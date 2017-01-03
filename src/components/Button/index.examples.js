import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const standardButtonExamples = [
  {type: 'Primary'},
  {type: 'Success'},
  {type: 'Warning'},
  {type: 'Danger'}
]


const dispStyles = 'flex flex-column content-center justify-around flex-wrap items-center vh-100'
const darkDecorator = `${dispStyles} bg-navy`
const btnDisp = 'flex flex-column justify-around items-center vh-50'


// Standard Large Button (Default)
storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Large (Default)', `The Large Default Button is available in several different flavors.`, () => (
    <Button onClick={clickHandlerFixture}>
      Default
    </Button>
  ))

storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Large (All Types)', `The Large Default Button is available in several different flavors.`, () => (
    <div className={btnDisp}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <Button type={btn.type.toLowerCase()} onClick={clickHandlerFixture}>
            {btn.type}
          </Button>
        )
      })}
    </div>
  ))

// Small Button
storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Small (Default)', `The Small Button is available in several different flavors.`, () => (
    <Button size='small' onClick={clickHandlerFixture}>
      Default
    </Button>
  ))

storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Small (All Types)', `The Small Button is available in several different flavors.`, () => (
    <div className={btnDisp}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <Button type={btn.type.toLowerCase()} size='small' onClick={clickHandlerFixture}>
            {btn.type}
          </Button>
        )
      })}
    </div>
  ))

// Extra Large Button
storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Extra Large (Default)', `The Extra Large Button is available in several different flavors.`, () => (
    <Button size='extra-large' onClick={clickHandlerFixture}>
      Default
    </Button>
  ))

storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Extra Large (All Types)', `The Extra Large Button is sized for callouts.`, () => (
    <div className={btnDisp}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <Button type={btn.type.toLowerCase()} size='extra-large' onClick={clickHandlerFixture}>
            {btn.type}
          </Button>
        )
      })}
    </div>
  ))


// Outline Button
storiesOf('Button')
  .addDecorator((story) => (<div className={dispStyles}>{story()}</div>))

  .addWithInfo('Outline (Default)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <Button type='' onClick={clickHandlerFixture}>
      Default
    </Button>
  ))

storiesOf('Button')
  .addDecorator((story) => (<div className={darkDecorator}>{story()}</div>))

  .addWithInfo('Outline (All Types)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div className={btnDisp}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type.toLowerCase()} outline onClick={clickHandlerFixture}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))


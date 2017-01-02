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

storiesOf('Button')
  .addWithInfo('Default', `The default button.`, () => (
    <Button onClick={clickHandlerFixture}> 
      {stringFixture}
    </Button>
  ))

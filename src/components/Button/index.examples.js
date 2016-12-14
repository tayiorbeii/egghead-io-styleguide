import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Button from '.'

storiesOf('Button')
  .addWithInfo('API', () => (
    <Button> 
      {lorem.words()}
    </Button>
  ))

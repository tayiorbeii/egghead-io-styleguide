import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

storiesOf('Button')
  .addWithInfo('API', () => (
    <Button onClick={clickHandlerFixture}> 
      {stringFixture}
    </Button>
  ))

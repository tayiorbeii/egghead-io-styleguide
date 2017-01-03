import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import DumbComponent from '.'

storiesOf('DumbComponent')
  .addWithInfo('API', () => (
    <DumbComponent onClick={clickHandlerFixture}>
      {stringFixture}
    </DumbComponent>
  ))

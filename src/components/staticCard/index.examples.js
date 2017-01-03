import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, clickHandlerFixture} from '../../utils/Fixtures'
import staticCard from '.'

storiesOf('static - Card')
  .addWithInfo('API', () => (
    <div>
      <staticCard onClick={clickHandlerFixture}>
        {stringFixture}
      </staticCard>
    </div>
  ))

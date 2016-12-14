import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Well, {types} from '.'

storiesOf('Well', module)

  .addWithInfo('API', () => (
    <Well>
      {lorem.text()}
    </Well>
  ))

  .addWithPropsCombinations('Combinations', Well, {
    type: keys(types),
    children: [lorem.text()],
  })

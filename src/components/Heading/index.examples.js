import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Heading, {levels} from '.'

storiesOf('Heading')

  .addWithInfo('API', () => (
    <Heading>
      {lorem.words()}
    </Heading>
  ))

  .addWithPropsCombinations('Combinations', Heading, {
    level: levels,
    children: [lorem.words()]
  })

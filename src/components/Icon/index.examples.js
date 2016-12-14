import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Icon, {sizes, types} from './index'

storiesOf('Icon')

  .addWithInfo('API', () => (
    <Icon type='more-info' />
  ))

  .addWithPropsCombinations('Combinations', Icon, {
    size: keys(sizes),
    type: keys(types),
  })

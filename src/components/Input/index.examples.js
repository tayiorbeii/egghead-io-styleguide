import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Input from './index'

storiesOf('Input')
  .addWithInfo('Default', () => (
    <Input />
  ))

  // .addWithPropsCombinations('Size & Color Combinations', Icon, {
  //   size: keys(sizes),
  //   type: keys(types),
  //   color: keys(colors)
  // })

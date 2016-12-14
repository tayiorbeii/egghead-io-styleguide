import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Anchor from '.'

storiesOf('Anchor', module)
  .add('default', () => (
    <Anchor url='#'>
      {lorem.words()}
    </Anchor>
  ))

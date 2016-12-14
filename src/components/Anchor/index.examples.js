import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {internet, lorem} from 'faker'
import Anchor from '.'

storiesOf('Anchor')
  .addWithInfo('API', () => (
    <Anchor url={internet.url()}>
      {lorem.words()}
    </Anchor>
  ))

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Split from '.'

storiesOf('Split')
  .addWithInfo('API', () => (
    <Split
      title={lorem.words()}
      main={lorem.text()}
      aside={lorem.text()}
    />
  ))

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Tabs from '.'

storiesOf('Tabs')
  .addWithInfo('API', () => (
    <Tabs groups={[
      {
        title: lorem.words(),
        component: <div>{lorem.paragraph()}</div>,
      },
      {
        title: lorem.words(),
        component: <div>{lorem.paragraph()}</div>,
      },
    ]} />
  ))

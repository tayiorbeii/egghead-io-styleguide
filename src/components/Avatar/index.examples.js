import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {name, image} from 'faker'
import Avatar from '.'

storiesOf('Avatar')
  .addWithInfo('API', () => (
    <Avatar
      name={name.firstName()}
      url={image.avatar()}
    />
  ))

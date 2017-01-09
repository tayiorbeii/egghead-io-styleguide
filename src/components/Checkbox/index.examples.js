import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Checkbox from './index'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Checkbox')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Unchecked', () => (
    <Checkbox label='Checkbox' />
  ))


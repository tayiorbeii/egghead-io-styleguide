import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Input from './index'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

// Empty Field
storiesOf('Input')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Empty Field', () => (
    <Input />
  ))

// Field with Placeholder
storiesOf('Input')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Field with Placeholder', () => (
    <Input placeholder='Placeholder' />
  ))

// Disabled Field
storiesOf('Input')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Disabled Field', () => (
    <Input placeholder='Disabled' disabled />
  ))









  // .addWithPropsCombinations('Size & Color Combinations', Icon, {
  //   size: keys(sizes),
  //   type: keys(types),
  //   color: keys(colors)
  // })

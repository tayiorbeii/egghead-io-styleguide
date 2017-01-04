import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Icon, {sizes, types, colors} from './index'

storiesOf('Icons')
  .addWithInfo('Success', () => (
    <Icon type='success' />
  ))

  .addWithInfo('Cancel', () => (
    <Icon type='cancel' />
  ))

  .addWithInfo('Add', () => (
    <Icon type='add' />
  ))

  .addWithInfo('Warning', () => (
    <Icon type='warning' />
  ))

  .addWithInfo('Remove', () => (
    <Icon type='remove' />
  ))

  .addWithInfo('Question', () => (
    <Icon type='question' />
  ))

  .addWithInfo('Menu', () => (
    <Icon type='menu' />
  ))

  .addWithInfo('Step Incomplete', () => (
    <Icon type='step-incomplete' />
  ))

  .addWithInfo('Step Complete', () => (
    <Icon type='step-complete' />
  ))

  .addWithInfo('Close', () => (
    <Icon type='close' />
  ))

  .addWithInfo('More Info', () => (
    <Icon type='more-info' />
  ))

  .addWithInfo('Subscriber Minutes', () => (
    <Icon type='subscriber-minutes' />
  ))

  .addWithInfo('Revenue', () => (
    <Icon type='revenue' />
  ))

  .addWithInfo('Course', () => (
    <Icon type='course' />
  ))

  .addWithInfo('Lesson', () => (
    <Icon type='lesson' />
  ))

  .addWithPropsCombinations('Size & Color Combinations', Icon, {
    size: keys(sizes),
    type: keys(types),
    color: keys(colors)
  })

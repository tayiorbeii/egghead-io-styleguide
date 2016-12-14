import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture, ComponentFixture} from '../../utils/SnapshotFixtures'
import Tabs from '.'

test('default', () => (
  expect(create(
    <Tabs groups={[
      {
        title: StringFixture,
        component: <ComponentFixture />,
      },
      {
        title: StringFixture,
        component: <ComponentFixture />,
      },
    ]} />
  )).toMatchSnapshot()
))

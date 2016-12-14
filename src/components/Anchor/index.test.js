import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture, UrlFixture} from '../../utils/SnapshotFixtures'
import Anchor from '.'

test('default', () => (
  expect(create(
    <Anchor url={UrlFixture}>
      {StringFixture}
    </Anchor>
  )).toMatchSnapshot()
))

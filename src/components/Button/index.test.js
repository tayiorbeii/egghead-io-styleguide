import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture} from '../../utils/SnapshotFixtures'
import Button from '.'

test('default', () => (
  expect(create(
    <Button>
      {StringFixture}
    </Button>
  )).toMatchSnapshot()
))

import React from 'react';
import renderer from 'react-test-renderer';
import {Homepage} from '../src/pages/Homepage';

test('renders correctly', () => {
  const tree = renderer.create(<Homepage />).toJSON();
  expect(tree).toMatchSnapshot();
});

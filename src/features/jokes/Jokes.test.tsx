import React from 'react';
import TestRenderer from 'react-test-renderer';

import Jokes from './Jokes';
it('renders correctly', () => {
  const tree = TestRenderer.create(<Jokes />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <h2
      className="text-center text-2xl"
    >
      Random Joke
    </h2>
  `);
});

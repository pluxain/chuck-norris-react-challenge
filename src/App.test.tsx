import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';
// FIXME
xit('renders correctly', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    Array [
      <h1>
        Chuck Norris React Challenge
      </h1>,
      <h2
        className="text-center text-2xl"
      >
        Random Joke
      </h2>,
    ]
  `);
});

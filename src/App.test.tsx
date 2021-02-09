import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';
it('renders correctly', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <h1>
      Chuck Norris React Challenge
    </h1>
  `);
});

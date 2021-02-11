import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import App from './App';
// FIXME
it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Router>
      <App />
    </Router>
  ).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    Array [
      <nav>
        <ul
          className="flex flex-row items-stretch justify-center bg-gray-100 h-12 divide-x divide-black"
        >
          <li
            className="w-1/2 flex flex-row items-center justify-center"
          >
            <a
              aria-current="page"
              className="flex justify-center items-center self-stretch w-full active"
              href="/"
              onClick={[Function]}
              style={Object {}}
            >
              Home
            </a>
          </li>
          <li
            className="w-1/2 flex flex-row items-center justify-center"
          >
            <a
              aria-current={null}
              className="flex justify-center items-center self-stretch w-full"
              href="/jokes"
              onClick={[Function]}
            >
              Jokes
            </a>
          </li>
        </ul>
      </nav>,
      <section>
        <h1>
          Chuck Norris React Challenge
        </h1>
        <h2>
          Youhou !
        </h2>
      </section>,
    ]
  `);
});

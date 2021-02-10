import React from 'react';
import TestRenderer from 'react-test-renderer';
import Blockquote from 'components/Blockquote';

describe('Joke feature Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Blockquote>
        Culpa deserunt Lorem consectetur Lorem pariatur labore aliquip in
        nostrud velit Lorem dolor.
      </Blockquote>
    );
    expect(tree).toMatchInlineSnapshot(`
      <blockquote
        className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900"
      >
        Culpa deserunt Lorem consectetur Lorem pariatur labore aliquip in nostrud velit Lorem dolor.
      </blockquote>
    `);
  });
});

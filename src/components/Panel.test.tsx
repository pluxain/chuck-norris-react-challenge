import React from 'react';
import TestRenderer from 'react-test-renderer';
import Panel from 'components/Panel';

describe('Panel Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Panel />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification flex items-center justify-center text-xl border-gray-600 bg-gray-100 flex-grow font-extrabold tracking-tight text-gray-600 "
      />
    `);
  });

  it('renders added css classes', () => {
    const tree = TestRenderer.create(<Panel className="some class added" />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification flex items-center justify-center text-xl border-gray-600 bg-gray-100 flex-grow font-extrabold tracking-tight text-gray-600 some class added"
      />
    `);
  });

  it('renders children', () => {
    const tree = TestRenderer.create(<Panel>This is some Panel test</Panel>);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification flex items-center justify-center text-xl border-gray-600 bg-gray-100 flex-grow font-extrabold tracking-tight text-gray-600 "
      >
        This is some Panel test
      </div>
    `);
  });
});

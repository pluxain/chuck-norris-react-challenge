import React from 'react';
import TestRenderer from 'react-test-renderer';
import Panel from 'components/Panel';

describe('Panel Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Panel />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900 "
      />
    `);
  });

  it('renders added css classes', () => {
    const tree = TestRenderer.create(<Panel className="some class added" />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900 some class added"
      />
    `);
  });

  it('renders children', () => {
    const tree = TestRenderer.create(<Panel>This is some Panel test</Panel>);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900 "
      >
        This is some Panel test
      </div>
    `);
  });
});

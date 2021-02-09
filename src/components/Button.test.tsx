import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Button from 'components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Button onClick={() => false} />);
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="button"
      />
    `);
  });
  it('triggers on click', () => {
    const onClick = jest.fn();
    const tree = TestRenderer.create(
      <Button onClick={onClick} />
    ).toJSON() as ReactTestRendererJSON;

    // manually trigger the callback
    tree.props.onClick();
    expect(onClick).toHaveBeenCalled();
  });
});

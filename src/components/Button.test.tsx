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

  it('renders children', () => {
    const tree = TestRenderer.create(
      <Button onClick={() => false}>Click Me!</Button>
    ).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="button"
      >
        Click Me!
      </button>
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

  it('can have a type', () => {
    const tree = TestRenderer.create(
      <Button onClick={() => {}} type="submit" />
    );
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="submit"
      />
    `);
  });

  it('renders added css classes', () => {
    const tree = TestRenderer.create(
      <Button onClick={() => {}} className="some class added" />
    );
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn some class added"
        onClick={[Function]}
        type="button"
      />
    `);
  });
});

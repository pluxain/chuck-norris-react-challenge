import React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import Button from 'components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const tree = create(<Button onClick={() => false} />);
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="button"
      />
    `);
  });

  it('renders an icon', () => {
    const tree = create(<Button onClick={() => {}} icon="redo" />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="button"
      >
        <svg
          aria-hidden="true"
          className="svg-inline--fa fa-redo fa-w-16 "
          data-icon="redo"
          data-prefix="fas"
          focusable="false"
          role="img"
          style={Object {}}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
            fill="currentColor"
            style={Object {}}
          />
        </svg>
      </button>
    `);
  });

  it('renders a text', () => {
    const tree = create(
      <Button onClick={() => {}} text="Click Me!" />
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
    const tree = create(
      <Button onClick={onClick} />
    ).toJSON() as ReactTestRendererJSON;

    // manually trigger the callback
    tree.props.onClick();
    expect(onClick).toHaveBeenCalled();
  });

  it('can have a type', () => {
    const tree = create(<Button onClick={() => {}} type="submit" />);
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="btn "
        onClick={[Function]}
        type="submit"
      />
    `);
  });

  it('renders added css classes', () => {
    const tree = create(
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

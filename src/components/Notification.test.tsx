import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Notification from 'components/Notification';
import Button from 'components/Button';

describe('Notification Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Notification />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="flex flex-row notification error "
        role="alert"
      >
        <div
          className="flex-grow"
        />
      </div>
    `);
  });

  it('has a type', () => {
    const tree = TestRenderer.create(<Notification type="success" />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="flex flex-row notification success "
        role="alert"
      >
        <div
          className="flex-grow"
        />
      </div>
    `);
  });

  it('renders children', () => {
    const tree = TestRenderer.create(
      <Notification>
        <p>This is some embedded message.</p>
      </Notification>
    );
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="flex flex-row notification error "
        role="alert"
      >
        <div
          className="flex-grow"
        >
          <p>
            This is some embedded message.
          </p>
        </div>
      </div>
    `);
  });

  it('renders added css classes', () => {
    const tree = TestRenderer.create(
      <Notification className="some class added" />
    );
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="flex flex-row notification error some class added"
        role="alert"
      >
        <div
          className="flex-grow"
        />
      </div>
    `);
  });

  it('can be disposable', () => {
    const tree = TestRenderer.create(<Notification disposable={true} />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="flex flex-row notification error "
        role="alert"
      >
        <div
          className="flex-grow"
        />
        <div
          className="flex justify-center items-center -mr-2"
        >
          <button
            className="btn outline-none focus:outline-none border-0"
            onClick={[Function]}
            title="close"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="svg-inline--fa fa-times-circle fa-w-16 "
              data-icon="times-circle"
              data-prefix="fas"
              focusable="false"
              role="img"
              style={Object {}}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                fill="currentColor"
                style={Object {}}
              />
            </svg>
          </button>
        </div>
      </div>
    `);
  });

  it('runs onDispose when disposable and button is clicked', () => {
    const onDispose = jest.fn();
    const tree = TestRenderer.create(
      <Notification disposable={true} onDispose={onDispose} />
    );
    const instance = tree.root;

    // manually trigger the callback
    // This is closed to implementation but it also helps understand how the component works
    instance.findByType(Button).props.onClick();
    expect(onDispose).toHaveBeenCalled();
  });
});

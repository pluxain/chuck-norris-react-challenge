import React from 'react';
import TestRenderer from 'react-test-renderer';
import Notification from 'components/Notification';

describe('Notification Component', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Notification />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification error "
      />
    `);
  });

  it('has a type', () => {
    const tree = TestRenderer.create(<Notification type="success" />);
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification success "
      />
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
        className="notification error "
      >
        <p>
          This is some embedded message.
        </p>
      </div>
    `);
  });

  it('renders added css classes', () => {
    const tree = TestRenderer.create(
      <Notification className="some class added" />
    );
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="notification error some class added"
      />
    `);
  });
});

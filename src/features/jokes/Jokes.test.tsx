import React from 'react';
import TestRenderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { mocked } from 'ts-jest/utils';
import Jokes from './Jokes';
import { RootState } from 'rootReducer';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Jokes feature main Component', () => {
  beforeEach(() => {
    mocked(useSelector).mockClear();
  });
  it('renders correctly', () => {
    mocked(useSelector).mockImplementation(() => {
      return {
        isCommunicating: false,
        joke: { id: 123, joke: 'Chuck Norris is my hero' },
      };
    });
    const tree = TestRenderer.create(<Jokes />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <section
        className="bg-gray-50 flex-col flex md:flex-row"
      >
        <h2
          className="flex-grow font-extrabold tracking-tight text-gray-900"
        >
          Chuck Norris is my hero
        </h2>
        <div
          className="flex md:flex-none flex-grow md:space-y-1 md:flex-col flex-row flxe-x-1"
        >
          <button
            className="btn primary flex-grow"
            disabled={false}
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
        </div>
      </section>
    `);
  });
});

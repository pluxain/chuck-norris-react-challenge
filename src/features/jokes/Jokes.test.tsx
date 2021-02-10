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
      <section>
        <h1
          className="flex mt-4 p-6"
        >
          <span
            className="flex-grow"
          >
            Let's have some fun!
             
            <small
              className="text-xs"
            >
              with the great Chuuuuuuuck
            </small>
          </span>
          <span
            className="md:w-1/6 flex"
          >
            <button
              className="btn info flex-1 text-base"
              disabled={false}
              onClick={[Function]}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-question-circle fa-w-16 mr-2"
                data-icon="question-circle"
                data-prefix="fas"
                focusable="false"
                role="img"
                style={Object {}}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                  fill="currentColor"
                  style={Object {}}
                />
              </svg>
               Help
            </button>
          </span>
        </h1>
        <hr />
        <div
          className="mt-4 p-6 flex-col flex md:flex-row"
        >
          <blockquote
            className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900"
          >
            Chuck Norris is my hero
          </blockquote>
          <div
            className="flex md:flex-none md:w-1/6 flex-grow md:space-y-1 md:flex-col flex-row flxe-x-1"
          >
            <button
              className="btn secondary flex-1"
              disabled={false}
              onClick={[Function]}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-redo fa-w-16 mr-2"
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
               Reroll
            </button>
            <button
              className="btn primary flex-1"
              onClick={[Function]}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-share-alt fa-w-14 mr-2"
                data-icon="share-alt"
                data-prefix="fas"
                focusable="false"
                role="img"
                style={Object {}}
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
                  fill="currentColor"
                  style={Object {}}
                />
              </svg>
               Share
            </button>
          </div>
        </div>
      </section>
    `);
  });
});

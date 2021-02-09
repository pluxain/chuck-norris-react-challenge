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
        className="bg-gray-50 flex flex-row"
      >
        <h2
          className="flex-grow font-extrabold tracking-tight text-gray-900"
        >
          Chuck Norris is my hero
           
        </h2>
        <div
          className="flex flex-col"
        >
          <button
            className="btn primary"
            disabled={false}
            onClick={[Function]}
            type="button"
          >
            Reroll
          </button>
        </div>
      </section>
    `);
  });
});

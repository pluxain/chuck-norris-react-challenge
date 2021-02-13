import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter as Router, useParams } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import JokesFeature from 'features/jokes/Jokes';

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
  };
});

// FIXME
describe.skip('Jokes feature main Component', () => {
  beforeEach(() => {
    mocked(useParams).mockClear();
  });
  it('renders correctly', async () => {
    mocked(useParams).mockImplementation(() => ({}));
    const tree = create(
      <Router>
        <JokesFeature />
      </Router>
    );
    expect(tree).toMatchInlineSnapshot();
  });
});

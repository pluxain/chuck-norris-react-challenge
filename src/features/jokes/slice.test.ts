import jokesReducer, {
  fetchJoke,
  shareJoke,
  stopSharingJoke,
} from 'features/jokes/slice';

describe('Jokes reducer', () => {
  it('has an initial state', () => {
    const expected = {
      joke: undefined,
      isCommunicating: false,
      error: undefined,
    };
    const actual = jokesReducer(undefined, { type: 'unknown' });
    expect(actual).toEqual(expected);
  });

  describe(`${fetchJoke.pending} reducer`, () => {
    it('should set isCommunicating', () => {
      const actual = jokesReducer({}, { type: fetchJoke.pending });
      expect(actual.isCommunicating).toBe(true);
    });

    it('should reset the error', () => {
      const actual = jokesReducer(
        { error: 'Chuck Norris went bad' },
        { type: fetchJoke.pending }
      );
      expect(actual.error).toBe(undefined);
    });

    it('should not touch the joke', () => {
      const joke = { id: 123, joke: 'Chuck Norris is a funny guy' };
      const actual = jokesReducer({ joke }, { type: fetchJoke.pending });
      expect(actual.joke).toBe(joke);
    });
  });

  describe(`${fetchJoke.fulfilled} reducer`, () => {
    it('should reset isCommunicating', () => {
      const actual = jokesReducer(
        { isCommunicating: true },
        { type: fetchJoke.fulfilled }
      );
      expect(actual.isCommunicating).toBe(false);
    });

    it('should not touch the error', () => {
      const error = 'An error again ?! Call Chuck Norris';
      const actual = jokesReducer({ error }, { type: fetchJoke.fulfilled });
      expect(actual.error).toBe(error);
    });

    it('should set the joke', () => {
      const joke = { id: 123, joke: 'Chuck Norris is a funny guy' };
      const actual = jokesReducer(
        {},
        { type: fetchJoke.fulfilled, payload: joke }
      );
      expect(actual.joke).toBe(joke);
    });
  });

  describe(`${fetchJoke.rejected} reducer`, () => {
    it('should revert isCommunicating', () => {
      const actual = jokesReducer(
        { isCommunicating: true },
        { type: fetchJoke.rejected }
      );
      expect(actual.isCommunicating).toBe(false);
    });

    it('should set the error', () => {
      const error = 'Something went bad ! Chuck Norris is missing !!';
      const actual = jokesReducer(
        {},
        { type: fetchJoke.rejected, payload: error }
      );
      expect(actual.error).toBe(error);
    });

    it('should not touch the joke', () => {
      const joke = {
        id: 123,
        joke: 'Chuck Norris sleeps with his Texas Ranger hat',
      };
      const actual = jokesReducer({ joke }, { type: fetchJoke.rejected });
      expect(actual.joke).toBe(joke);
    });
  });

  describe(`${shareJoke.type} reducer`, () => {
    it('sets the shared joke', () => {
      const joke = {
        id: 123,
        joke: 'Chuck and Norris is better than Starsky and Hutch',
      };
      const actual = jokesReducer(
        {},
        {
          type: shareJoke.type,
          payload: joke,
        }
      );
      expect(actual.shared).toEqual(joke);
    });
    it('does not affect the other part of the state', () => {
      const joke = {
        id: 234,
        joke: 'Illo repudiandae sit qui totam dolor id odio.',
      };
      const shared = {
        id: 123,
        joke: 'Chuck and Norris is better than Starsky and Hutch',
      };
      const error =
        'The SMTP interface is down, input the back-end sensor so we can bypass the IB bus!';
      const actual = jokesReducer(
        {
          isCommunicating: true,
          joke,
          error,
        },
        {
          type: shareJoke.type,
          payload: shared,
        }
      );
      expect(actual.isCommunicating).toBe(true);
      expect(actual.error).toBe(error);
      expect(actual.joke).toEqual(joke);
    });
  });
});

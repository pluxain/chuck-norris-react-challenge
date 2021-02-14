import jokesReducer, { fetchJoke, postJoke } from 'features/jokes/slice';

const initialState = {
  ids: [],
  entities: {},
  fetching: false,
  sharing: false,
};

describe('Jokes reducer', () => {
  it('has an initial state', () => {
    const actual = jokesReducer(undefined, { type: 'unknown' });
    expect(actual).toEqual(initialState);
  });

  describe(`${fetchJoke.pending} reducer`, () => {
    it('should set fetching flag', () => {
      const actual = jokesReducer(undefined, { type: fetchJoke.pending });
      expect(actual.fetching).toBe(true);
    });

    it('should reset the fetchError', () => {
      const actual = jokesReducer(
        {
          ...initialState,
          fetchError: 'Chuck Norris went bad',
        },
        { type: fetchJoke.pending }
      );
      expect(actual.fetchError).toBe(undefined);
    });

    it('should not affect the rest of the state', () => {
      const joke = {
        id: 543,
        joke: 'We need to index the neural XSS port!',
      };
      const error =
        "I'll reboot the bluetooth USB sensor, that should monitor the THX bus!";
      const actual = jokesReducer(
        {
          ...initialState,
          ids: [joke.id],
          entities: { [joke.id]: joke },
          shareError: error,
        },
        {
          type: fetchJoke.pending,
        }
      );
      expect(actual.ids).toEqual([joke.id]);
      expect(actual.entities).toEqual({ [joke.id]: joke });
      expect(actual.sharing).toBe(initialState.sharing);
      expect(actual.shareError).toBe(error);
    });
  });

  describe(`${fetchJoke.fulfilled} reducer`, () => {
    it('should reset fetching flag', () => {
      const actual = jokesReducer(
        { ...initialState, fetching: true },
        {
          type: fetchJoke.fulfilled,
          payload: {
            id: 123,
            joke:
              'Use the redundant PNG circuit, then you can compress the virtual application!',
          },
        }
      );
      expect(actual.fetching).toBe(false);
    });

    it('should not touch the rest of the state', () => {
      const error = 'An error again ?! Call Chuck Norris';
      const actual = jokesReducer(
        { ...initialState, fetchError: error, shareError: error },
        {
          type: fetchJoke.fulfilled,
          payload: {
            id: 123,
            joke: 'We need to navigate the 1080p USB matrix!',
          },
        }
      );
      expect(actual.fetchError).toBe(error);
      expect(actual.shareError).toBe(error);
      expect(actual.sharing).toBe(initialState.sharing);
    });

    it('should add the Joke to byIds', () => {
      const joke = { id: 123, joke: 'Chuck Norris is a funny guy' };
      const actual = jokesReducer(undefined, {
        type: fetchJoke.fulfilled,
        payload: joke,
      });
      expect(actual.entities).toEqual({ [joke.id]: joke });
    });

    it('should not add the Joke to entities twice', () => {
      const joke = { id: 123, joke: 'Chuck Norris is a funny guy' };
      const actual = jokesReducer(
        {
          ...initialState,
          entities: {
            [joke.id]: joke,
          },
        },
        {
          type: fetchJoke.fulfilled,
          payload: joke,
        }
      );
      expect(actual.entities).toEqual({ [joke.id]: joke });
    });

    it('should add the joke id to ids', () => {
      const joke = {
        id: 345,
        joke:
          "I'll index the optical EXE firewall, that should alarm the SMTP protocol!",
      };
      const actual = jokesReducer(undefined, {
        type: fetchJoke.fulfilled,
        payload: joke,
      });
      expect(actual.ids).toEqual([345]);
    });

    it('should not add an already existing id in ids', () => {
      const joke = {
        id: 456,
        joke:
          'If we transmit the sensor, we can get to the IB circuit through the mobile IB program!',
      };
      const actual = jokesReducer(
        { ...initialState, ids: [456] },
        {
          type: fetchJoke.fulfilled,
          payload: joke,
        }
      );
      expect(actual.ids).toEqual([456]);
    });
  });

  describe(`${fetchJoke.rejected} reducer`, () => {
    it('should revert fetching flag', () => {
      const actual = jokesReducer(
        { ...initialState, fetching: true },
        {
          type: fetchJoke.rejected,
          error: {
            message:
              'If we index the program, we can get to the USB port through the neural FTP matrix!',
          },
        }
      );
      expect(actual.fetching).toBe(false);
    });

    it('should set the error', () => {
      const message = 'Something went bad ! Chuck Norris is missing !!';
      const actual = jokesReducer(undefined, {
        type: fetchJoke.rejected,
        error: { message },
      });
      expect(actual.fetchError).toBe(message);
    });

    it('should not affect the rest of the state', () => {
      const joke = {
        id: 543,
        joke: 'We need to input the virtual USB interface!',
      };
      const actual = jokesReducer(
        { ...initialState, ids: [joke.id], entities: { [joke.id]: joke } },
        {
          type: fetchJoke.rejected,
          error: {
            message: 'Something bad happened. Call Chuck to be avenged!',
          },
        }
      );
      expect(actual.ids).toEqual([joke.id]);
      expect(actual.entities).toEqual({ [joke.id]: joke });
    });
  });

  describe(`${postJoke.pending} reducer`, () => {
    it('should set the sharing flag', () => {
      const actual = jokesReducer(undefined, {
        type: postJoke.pending,
      });
      expect(actual.sharing).toBe(true);
    });

    it('should reset the shareError', () => {
      const actual = jokesReducer(
        {
          ...initialState,
          shareError: 'We need to input the optical XSS driver!',
        },
        {
          type: postJoke.pending,
        }
      );
      expect(actual.shareError).toBe(undefined);
    });

    it('should not affect the rest of the state', () => {
      const joke = {
        id: 12345,
        joke:
          'Use the auxiliary JSON alarm, then you can parse the back-end bandwidth!',
      };
      const error =
        "transmitting the program won't do anything, we need to input the online XML system!";
      const actual = jokesReducer(
        {
          ...initialState,
          ids: [joke.id],
          entities: { [joke.id]: joke },
          fetchError: error,
        },
        {
          type: postJoke.pending,
        }
      );
      expect(actual.ids).toEqual([joke.id]);
      expect(actual.entities).toEqual({ [joke.id]: joke });
      expect(actual.fetching).toBe(initialState.fetching);
      expect(actual.fetchError).toBe(error);
    });
  });

  describe(`${postJoke.fulfilled} reducer`, () => {
    it('should reset the sharing flag', () => {
      const actual = jokesReducer(
        { ...initialState, sharing: true },
        { type: postJoke.fulfilled }
      );
      expect(actual.sharing).toBe(false);
    });

    it('should not touch the rest of the state', () => {
      const joke = {
        id: 6543,
        joke:
          'The RAM port is down, back up the primary bus so we can transmit the JBOD feed!',
      };
      const error =
        "I'll bypass the haptic SMTP alarm, that should panel the SCSI monitor!";

      const actual = jokesReducer(
        {
          ...initialState,
          fetchError: error,
          ids: [joke.id],
          entities: { [joke.id]: joke },
        },
        { type: postJoke.fulfilled }
      );

      expect(actual.fetchError).toBe(error);
      expect(actual.fetching).toBe(initialState.fetching);
      expect(actual.ids).toEqual([joke.id]);
      expect(actual.entities).toEqual({ [joke.id]: joke });
    });
  });

  describe(`${postJoke.rejected} reducer`, () => {
    it('should reset the sharing flag', () => {
      const actual = jokesReducer(
        { ...initialState, sharing: true },
        {
          type: postJoke.rejected,
          error: {
            message:
              "programming the matrix won't do anything, we need to back up the 1080p CSS system!",
          },
        }
      );
      expect(actual.sharing).toBe(false);
    });

    it('should set the shareError', () => {
      const message =
        "indexing the monitor won't do anything, we need to parse the haptic RAM sensor!";
      const actual = jokesReducer(undefined, {
        type: postJoke.rejected,
        error: { message },
      });

      expect(actual.shareError).toBe(message);
    });
  });
});

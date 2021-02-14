import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { BaseState, FetchAttributes, Joke, ShareAttributes } from './types';
import { one, random, send } from './api';

const jokesAdapter = createEntityAdapter<Joke>();
const additionalState: BaseState = {
  fetching: false,
  sharing: false,
};

export const fetchJoke = createAsyncThunk(
  'jokes/fetch',
  async ({ id, history }: FetchAttributes) => {
    let joke;
    if (id) {
      joke = await one(id);
    } else {
      joke = await random();
    }
    history.push(`/jokes/${joke.id}`);
    return joke;
  }
);

export const postJoke = createAsyncThunk(
  'jokes/share',
  async ({ friends, joke, history }: ShareAttributes) => {
    await send(joke, friends);
    history.push(`/jokes/${joke.id}`);
  }
);

const jokeSlice = createSlice({
  name: 'jokes',
  initialState: jokesAdapter.getInitialState(additionalState),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchJoke.pending, state => {
      state.fetching = true;
      state.fetchError = undefined;
    });

    builder.addCase(
      fetchJoke.fulfilled,
      (state, action: PayloadAction<Joke>) => {
        const joke = action.payload;
        state.fetching = false;
        if (!state.ids.includes(joke.id)) {
          jokesAdapter.addOne(state, joke);
        }
      }
    );

    builder.addCase(fetchJoke.rejected, (state, action) => {
      state.fetching = false;
      state.fetchError = action.error.message;
    });

    builder.addCase(postJoke.pending, state => {
      state.sharing = true;
      state.shareError = undefined;
    });

    builder.addCase(postJoke.fulfilled, state => {
      state.sharing = false;
    });

    builder.addCase(postJoke.rejected, (state, action) => {
      state.sharing = false;
      state.shareError = action.error.message;
    });
  },
});

export default jokeSlice.reducer;

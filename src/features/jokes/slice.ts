import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { History } from 'history';
import { one, random } from './api';

const initialState: Partial<JokesState> = {
  isCommunicating: false,
};

export type FetchAttributes = {
  id?: number;
  history: History;
};
export const fetchJoke = createAsyncThunk(
  'jokes/fetch',
  async ({ id, history }: FetchAttributes, { rejectWithValue }) => {
    try {
      let joke;
      if (id) {
        joke = await one(id);
      } else {
        joke = await random();
      }
      if (history.location.pathname !== `/jokes/${joke.id}`) {
        history.push(`/jokes/${joke.id}`);
      }
      return joke;
    } catch (err) {
      return rejectWithValue(err.message as string);
    }
  }
);

const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    shareJoke(state, action: PayloadAction<Joke>) {
      state.shared = action.payload;
    },
    stopSharingJoke(state) {
      state.shared = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchJoke.pending, state => {
      state.isCommunicating = true;
      state.error = undefined;
    });
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.isCommunicating = false;
      state.joke = action.payload;
    });
    builder.addCase(fetchJoke.rejected, (state, action) => {
      state.isCommunicating = false;
      state.error = action.payload as string;
    });
  },
});

export const { shareJoke, stopSharingJoke } = jokeSlice.actions;
export default jokeSlice.reducer;

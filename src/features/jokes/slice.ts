import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { random } from './api';

const initialState: Partial<JokesState> = {
  isCommunicating: false,
};

export const fetchRandom = createAsyncThunk<Joke>(
  'jokes/random',
  async (_, { rejectWithValue }) => {
    try {
      const joke = await random();
      return joke;
    } catch (err) {
      return rejectWithValue(err.message as string);
    }
  }
);

const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRandom.pending, state => {
      state.isCommunicating = true;
      state.error = undefined;
    });
    builder.addCase(fetchRandom.fulfilled, (state, action) => {
      state.isCommunicating = false;
      state.joke = action.payload;
    });
    builder.addCase(fetchRandom.rejected, (state, action) => {
      state.isCommunicating = false;
      state.error = action.payload as string;
    });
  },
});

export default jokeSlice.reducer;

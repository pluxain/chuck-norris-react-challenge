import { combineReducers } from '@reduxjs/toolkit';
import jokesReducer from 'features/jokes/slice';

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RooState } from 'rootReducer';
import { fetchRandom } from './slice';

export default function Joke() {
  const { joke } = useSelector((state: RooState) => state.jokes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof joke === 'undefined') {
      dispatch(fetchRandom());
    }
  }, [joke, dispatch]);
  return (
    <>
      <h2>{joke?.joke}</h2>
    </>
  );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import { fetchRandom } from './slice';
import Button from 'components/Button';

export default function Joke() {
  const { joke, isCommunicating } = useSelector(
    (state: RootState) => state.jokes
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof joke === 'undefined') {
      dispatch(fetchRandom());
    }
  }, [joke, dispatch]);
  return (
    <section className="bg-gray-50 flex flex-row">
      <h2 className="flex-grow font-extrabold tracking-tight text-gray-900">
        {joke?.joke}{' '}
      </h2>
      <div className="flex flex-col">
        <Button
          className="primary"
          disabled={isCommunicating}
          onClick={() => dispatch(fetchRandom())}
        >
          Reroll
        </Button>
      </div>
    </section>
  );
}

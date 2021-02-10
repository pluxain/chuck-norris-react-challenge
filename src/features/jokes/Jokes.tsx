import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import { fetchRandom } from './slice';
import Button from 'components/Button';
import Icon from 'components/Icon';

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
    <section className="bg-gray-50 flex-col flex md:flex-row">
      <h2 className="flex-grow font-extrabold tracking-tight text-gray-900">
        {joke?.joke}
      </h2>
      <div className="flex md:flex-none flex-grow md:space-y-1 md:flex-col flex-row flxe-x-1">
        <Button
          className="primary flex-grow md:flex-none"
          disabled={isCommunicating}
          onClick={() => dispatch(fetchRandom())}
        >
          <Icon icon="redo" className="mr-2" /> Reroll
        </Button>
      </div>
    </section>
  );
}

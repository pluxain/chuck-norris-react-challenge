import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import { fetchRandom } from './slice';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Explanation from './Explanation';
import Blockquote from 'components/Blockquote';

export default function Joke() {
  const [share, setShare] = useState(false);
  const [help, setHelp] = useState(false);
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
    <>
      <section>
        <h1 className="flex mt-4 p-6">
          <span className="flex-grow">
            Let's have some fun!{' '}
            <small className="text-xs">with the great Chuuuuuuuck</small>
          </span>
          <span className="md:w-1/6 flex">
            <Button
              className="info flex-1 text-base"
              disabled={help}
              onClick={() => setHelp(true)}
            >
              <Icon icon="question-circle" className="mr-2" /> Help
            </Button>
          </span>
        </h1>
        <hr />
        {help ? <Explanation hideMe={() => setHelp(false)} /> : null}
        <div className="mt-4 p-6 flex-col flex md:flex-row">
          <Blockquote>{joke ? joke.joke : ''}</Blockquote>
          <div className="flex md:flex-none md:w-1/6 flex-grow md:space-y-1 md:flex-col flex-row flxe-x-1">
            <Button
              className="secondary flex-1"
              disabled={isCommunicating}
              onClick={() => dispatch(fetchRandom())}
            >
              <Icon icon="redo" className="mr-2" /> Reroll
            </Button>

            {share ? (
              <Button onClick={() => setShare(false)} className="danger flex-1">
                <Icon icon="ban" className="mr-2" /> Stop sharing
              </Button>
            ) : (
              <Button onClick={() => setShare(true)} className="primary flex-1">
                <Icon icon="share-alt" className="mr-2" /> Share
              </Button>
            )}
          </div>
        </div>
      </section>
      {share ? (
        <section>
          <h2>Add some friends</h2>
        </section>
      ) : null}
    </>
  );
}

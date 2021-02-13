import React, { useEffect, useState } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { History } from 'history';
import { Joke } from './types';
import Button from 'components/Button';
import Notification from 'components/Notification';
import Panel from 'components/Panel';
import LoadingIndicator from 'components/LoadingIndicator';
import Share from './Share';
import Explanation from './Explanation';
import { one, random } from './api';
import { shareJoke, stopSharingJoke } from './slice';

type FetchAttributes = {
  id?: number;
  history: History;
};

export default function JokesFeature() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [help, setHelp] = useState(false);
  const [joke, setJoke] = useState<Joke>();
  const [error, setError] = useState('');
  const [communicating, setCommunicating] = useState(false);

  async function fetchJoke({ id, history }: FetchAttributes) {
    setCommunicating(true);
    setError('');
    try {
      let joke;
      if (id) {
        joke = await one(id);
      } else {
        joke = await random();
      }
      setJoke(joke);
      if (history.location.pathname !== `/jokes/${joke.id}`) {
        history.push(`/jokes/${joke.id}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setCommunicating(false);
    }
  }

  // we want to fetch a random joke when there is no id
  // and refetch the joke when the id does not correspond to the actual joke (browser navigation)
  // Router is the source of truth for which joke to display
  useEffect(() => {
    if (typeof id === 'undefined') {
      fetchJoke({ history });
    } else if (joke) {
      if (joke.id !== +id) {
        fetchJoke({ id: +id, history });
      }
    } else {
      fetchJoke({ id: +id, history });
    }
  }, [id]);

  return (
    <>
      <section>
        <h1 className="title">
          Let&apos;s have some fun!{' '}
          <Button
            className="text-base"
            disabled={help}
            onClick={() => setHelp(true)}
            icon="question-circle"
          />
        </h1>
        <hr />
        {help ? <Explanation hideMe={() => setHelp(false)} /> : null}
        {error ? <Notification type="error">{error}</Notification> : null}
        <div className="mt-4 flex-col flex md:flex-row">
          <Panel className="md:h-32 h-60 md:mr-2">
            {communicating ? (
              <LoadingIndicator size="2x" />
            ) : joke ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: `#${joke.id}.&nbsp;${joke.joke}`,
                }}
              />
            ) : (
              ''
            )}
          </Panel>
          <div className="flex md:flex-none md:w-1/6 my-2 flex-grow md:space-y-1 md:flex-col flex-row">
            <Button
              className="secondary mr-2 md:mr-0"
              disabled={communicating}
              onClick={() => {
                fetchJoke({ history });
              }}
              icon="redo"
              text="Reroll"
            />

            <Route path={`/jokes/${joke?.id}`} exact>
              <Button
                className="btn primary flex-1"
                onClick={() => {
                  if (joke) {
                    dispatch(shareJoke(joke));
                    history.push(`/jokes/${joke?.id}/share`);
                  }
                }}
                icon="share-alt"
                text="Share"
              />
            </Route>
            <Route path={`/jokes/${joke?.id}/share`} exact>
              <Button
                className="btn danger flex-1"
                onClick={() => {
                  dispatch(stopSharingJoke());
                  history.push(`/jokes/${joke?.id}`);
                }}
                icon="ban"
                text="Stop sharing"
              />
            </Route>
          </div>
        </div>
      </section>

      <Route path={`/jokes/${joke?.id}/share`} component={Share} />
    </>
  );
}

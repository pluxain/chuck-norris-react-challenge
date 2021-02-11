import React, { useEffect, useState } from 'react';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import { History } from 'history';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Notification from 'components/Notification';
import Panel from 'components/Panel';
import LoadingIndicator from 'components/LoadingIndicator';
import Share from './Share';
import Explanation from './Explanation';
import { one, random } from './api';

export default function JokesFeature() {
  type FetchAttributes = {
    id?: number;
    history: History;
  };
  const history = useHistory();
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
          <span className="flex-grow">
            Let's have some fun!{' '}
            <small className="text-xs">with the great Chuuuuuuuck</small>
          </span>
          <span className="md:w-1/6 flex">
            <Button
              className="info flex-1 text-base"
              disabled={help}
              onClick={() => setHelp(true)}
              icon="question-circle"
              text="Help"
            />
          </span>
        </h1>
        <hr />
        {help ? <Explanation hideMe={() => setHelp(false)} /> : null}
        {error ? (
          <Notification type="error" disposable>
            {error}
          </Notification>
        ) : null}
        <div className="md:h-32 mt-4 flex-col flex md:flex-row">
          <Panel>
            {communicating ? (
              <LoadingIndicator size="2x" />
            ) : joke ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `#${joke.id}.&nbsp;${joke.joke}`,
                  }}
                />
              </>
            ) : (
              ''
            )}
          </Panel>
          <div className="flex md:flex-none md:w-1/6 mt-2 md:mt-0 flex-grow md:space-y-1 md:flex-col flex-row">
            <Button
              className="secondary"
              disabled={communicating}
              onClick={() => {
                fetchJoke({ history });
              }}
              icon="redo"
              text="Reroll"
            />

            <Route path={`/jokes/${joke?.id}`} exact>
              <NavLink
                to={`/jokes/${joke?.id}/share`}
                className="btn primary flex-1"
              >
                <Icon icon="share-alt" className="mr-2" /> Share
              </NavLink>
            </Route>
            <Route path={`/jokes/${joke?.id}/share`} exact>
              <NavLink to={`/jokes/${joke?.id}`} className="btn danger flex-1">
                <Icon icon="ban" className="mr-2" /> Stop Sharing
              </NavLink>
            </Route>
          </div>
        </div>
      </section>

      <Route path={`/jokes/${joke?.id}/share`} component={Share} />
    </>
  );
}

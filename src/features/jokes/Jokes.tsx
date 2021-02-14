import React, { useEffect, useState } from 'react';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import Notification from 'components/Notification';
import Panel from 'components/Panel';
import LoadingIndicator from 'components/LoadingIndicator';
import Icon from 'components/Icon';
import { RootState } from 'rootReducer';
import Share from './Share';
import { fetchJoke } from './slice';
import { Joke } from './types';
import Title from './Title';

export default function JokesFeature() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { entities, ids, fetchError, fetching } = useSelector(
    (state: RootState) => state.jokes
  );
  const [joke, setJoke] = useState<Joke>();

  // we keep track the id has changed
  // we keep track that the entities have changed
  useEffect(() => {
    if (typeof id === 'undefined') {
      // click on jokes root
      dispatch(fetchJoke({ history }));
    } else if (ids.length === 0) {
      // entered a url manually or link to unloaded joke
      dispatch(fetchJoke({ id: +id, history }));
    }
    // ids and entities are set at the same time
    // so we don't need to watch entities here
    setJoke(entities[+id]);
  }, [id, ids]);

  return (
    <>
      <section>
        <Title />
        <div className="mt-4 flex-col flex md:flex-row">
          <Panel className="md:h-32 h-60 md:mr-2">
            {fetching ? (
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
              disabled={fetching}
              onClick={() => {
                dispatch(fetchJoke({ history }));
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
                <Icon icon="ban" className="mr-2" /> Stop sharing
              </NavLink>
            </Route>
          </div>
        </div>
        {fetchError ? (
          <Notification type="error">{fetchError as string}</Notification>
        ) : null}
      </section>

      {joke ? (
        <Route path={`/jokes/${joke.id}/share`}>
          <Share joke={joke} />
        </Route>
      ) : null}
    </>
  );
}

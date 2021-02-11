import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { RootState } from 'rootReducer';
import sortEmails from 'utils/emails';
import Button from 'components/Button';
import Notification from 'components/Notification';
import Panel from 'components/Panel';
import AddFriend from './AddFriend';
import { send } from './api';
import { stopSharingJoke } from './slice';
import LoadingIndicator from 'components/LoadingIndicator';

type ShareAttributes = Share & {
  history: History;
};

export default function Share() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [error, setError] = useState('');
  const [communicating, setCommunicating] = useState(false);
  const { shared } = useSelector((state: RootState) => state.jokes);

  async function postJoke({ joke, friends, history }: ShareAttributes) {
    setCommunicating(true);
    setError('');
    try {
      const reponse = await send(friends, joke);
      if (history.location.pathname !== `/jokes/${joke.id}`) {
        history.push(`/jokes/${joke.id}`);
      }
      dispatch(stopSharingJoke());
    } catch (err) {
      setError(err.message);
    } finally {
      setCommunicating(false);
    }
  }

  return (
    <section>
      <h1 className="title">
        <span className="flex-grow">Share a joke with friends</span>
      </h1>
      {error ? <Notification type="error">{error}</Notification> : null}
      <div className="flex justify-center items-center">
        <div className="flex w-3/4 md:w-3/5">
          <AddFriend
            addFriend={(email: string) => {
              setFriends(prevSate => {
                const newState = [...prevSate, email];
                return sortEmails(newState);
              });
            }}
          />
        </div>
      </div>
      {friends.length > 0 ? (
        <Panel className="mt-4 flex flex-col justify-center items-center">
          {communicating ? (
            <LoadingIndicator size="2x" />
          ) : (
            <>
              <h2>You have friends !</h2>
              <ul className="flex flex-col w-3/4 md:w-3/5">
                {friends.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="flex justify-center items-center mt-4">
                <Button
                  onClick={() => {
                    if (shared) {
                      postJoke({ friends, joke: shared, history });
                    }
                  }}
                  text="Send"
                  icon="paper-plane"
                />
              </div>
            </>
          )}
        </Panel>
      ) : null}
    </section>
  );
}

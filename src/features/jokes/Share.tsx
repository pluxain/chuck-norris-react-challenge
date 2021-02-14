import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'rootReducer';
import sortEmails from 'utils/emails';
import Button from 'components/Button';
import Notification from 'components/Notification';
import LoadingIndicator from 'components/LoadingIndicator';
import Panel from 'components/Panel';
import AddFriend from './AddFriend';
import { postJoke } from './slice';
import { Friend, Joke, Share } from './types';

type ShareProps = {
  joke: Joke;
};
export default function Share({ joke }: ShareProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [friends, setFriends] = useState<Friend[]>([]);
  const { sharing, shareError } = useSelector(
    (state: RootState) => state.jokes
  );

  return (
    <section>
      <h1 className="title">
        <span className="flex-grow">Share a joke with friends</span>
      </h1>
      {shareError ? (
        <Notification type="error">{shareError}</Notification>
      ) : null}
      <div className="flex">
        <AddFriend
          addFriend={(email: string) => {
            setFriends(prevSate => {
              const newState = [...prevSate, email];
              return sortEmails(newState);
            });
          }}
        />
      </div>
      {friends.length > 0 ? (
        <Panel className="mt-4 flex flex-col justify-center items-center">
          {sharing ? (
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
                    dispatch(postJoke({ joke, friends, history }));
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

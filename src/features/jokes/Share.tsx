import Panel from 'components/Panel';
import React, { useState } from 'react';
import sortEmails from 'utils/emails';
import AddFriend from './AddFriend';

export default function Share() {
  const [friends, setFriends] = useState<Friend[]>([]);
  return (
    <section>
      <h1 className="title">
        <span className="flex-grow">Share a joke with friends</span>
      </h1>
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
          <h2>You have friends !</h2>
          <ul className="flex flex-col w-3/4 md:w-3/5">
            {friends.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Panel>
      ) : null}
    </section>
  );
}

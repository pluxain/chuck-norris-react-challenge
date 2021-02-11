import Button from 'components/Button';
import Icon from 'components/Icon';
import React, { useState } from 'react';
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
              setFriends([...friends, { email }]);
            }}
          />
        </div>
      </div>
      {friends.length > 0 ? (
        <div className="flex justify-center items-center">
          <ul className="mt-4 flex flex-col w-3/4 md:w-3/5">
            {friends.map((f, i) => (
              <li key={i}>{f.email}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

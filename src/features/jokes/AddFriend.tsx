import React, { ChangeEvent, useRef, useState } from 'react';
import validator from 'validator';
import Button, { ButtonProps } from 'components/Button';

type AddFriendProps = {
  addFriend: (email: string) => void;
};
export default function AddFriend({ addFriend }: AddFriendProps) {
  const [email, setEmail] = useState('');

  const input = useRef<HTMLInputElement>(null);
  const canSubmit = () => validator.isEmail(email);

  return (
    <form className="flex flex-row w-full">
      <div className="flex-grow">
        <input
          required
          id="email"
          ref={input}
          type="email"
          autoFocus
          value={email}
          placeholder="What's your friend's email"
          className={`${!canSubmit() ? 'invalid' : ''}`}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <Button
        className="primary ml-2"
        type="submit"
        onClick={e => {
          e.preventDefault();
          addFriend(email);
          setEmail('');
          input?.current?.focus();
        }}
        text="Add"
        icon="save"
        disabled={!canSubmit()}
      />
      <Button
        className="cancel ml-2"
        onClick={() => setEmail('')}
        text="Cancel"
        icon="times"
        disabled={email.trim() === ''}
      />
    </form>
  );
}

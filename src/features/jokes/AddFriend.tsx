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
    <form className="flex md:flex-row md:justify-end flex-col w-full">
      <div
        className={`my-2 md:mr-2 md:w-1/2 flex flex-row form-control ${
          !canSubmit() ? 'invalid' : ''
        }`}
      >
        <input
          required
          id="email"
          ref={input}
          type="email"
          autoFocus
          value={email}
          placeholder="What's your friend's email"
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          className="ml-2"
          onClick={() => setEmail('')}
          icon="times"
          disabled={email.trim() === ''}
        />
      </div>
      <div className="flex md:flex-none md:w-1/6 my-2 flex-grow md:space-y-1 md:flex-col flex-row">
        <Button
          className="primary flex-grow"
          type="submit"
          onClick={e => {
            e.preventDefault();
            addFriend(email);
            setEmail('');
            input?.current?.focus();
          }}
          text="Add"
          icon="plus"
          disabled={!canSubmit()}
        />
      </div>
    </form>
  );
}

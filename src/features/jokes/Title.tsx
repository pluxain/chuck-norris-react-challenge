import Button from 'components/Button';
import React, { useState } from 'react';
import Explanation from './Explanation';

export default function Title() {
  const [help, setHelp] = useState(false);
  return (
    <h1 className="title main">
      Let&apos;s have some fun!{' '}
      <Button
        className="text-base"
        disabled={help}
        onClick={() => setHelp(true)}
        icon="question-circle"
      />
      {help ? <Explanation hideMe={() => setHelp(false)} /> : null}
    </h1>
  );
}

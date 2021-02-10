import React, { MouseEventHandler } from 'react';
import Notification from 'components/Notification';
type ExplanationProps = {
  hideMe: MouseEventHandler<HTMLButtonElement>;
};
export default function Explanation({ hideMe }: ExplanationProps) {
  return (
    <Notification
      className="text-xl font-light"
      type="info"
      disposable={true}
      onDispose={hideMe}
    >
      <p>
        So, Chuck (Norris, in case you still wonder) is a Legend. No, he is a
        MYTH. Let's discover together how this arrived.
      </p>
      <p>Here you can find some of the treasures about Norris' Mythology.</p>
    </Notification>
  );
}

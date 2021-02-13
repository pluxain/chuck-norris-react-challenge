import React, { MouseEventHandler } from 'react';
import Notification from 'components/Notification';
type ExplanationProps = {
  hideMe: MouseEventHandler<HTMLButtonElement>;
};
export default function Explanation({ hideMe }: ExplanationProps) {
  return (
    <Notification
      className="text-xl font-light absolute top-20 right-6 left-6 shadow-lg inner-shadow"
      type="info"
      disposable={true}
      onDispose={hideMe}
    >
      <p>
        So, Chuck (Norris, in case you still wonder) is a Legend. No, he is a
        MYTH. Let&apos;s discover together how this arrived.
      </p>
      <p>
        Here you can find some of the treasures about Norris&apos;s Mythology.
      </p>
    </Notification>
  );
}

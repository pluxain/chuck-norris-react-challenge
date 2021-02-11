import React, { MouseEventHandler } from 'react';
import Button from 'components/Button';

type NotificationProps = WithChildren<{
  className?: string;
  type: 'success' | 'error' | 'info' | 'warning';
  disposable?: boolean;
  onDispose?: MouseEventHandler<HTMLButtonElement>;
}>;

export default function Notification({
  type,
  className = '',
  disposable = false,
  onDispose = () => {},
  children,
}: NotificationProps) {
  return (
    <div
      className={`flex flex-row notification ${type} ${className}`}
      role="alert"
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        {children}
      </div>
      {disposable ? (
        <div className="flex justify-center items-center -mr-2">
          <Button
            className="outline-none focus:outline-none border-0 text-xl"
            onClick={onDispose}
            title="close"
            icon="times-circle"
          />
        </div>
      ) : null}
    </div>
  );
}

import React, { MouseEventHandler } from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon';

type NotificationProps = WithChildren<{
  className?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  disposable?: boolean;
  onDispose?: MouseEventHandler<HTMLButtonElement>;
}>;

export default function Notification({
  type = 'error',
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
      <div className="flex-grow">{children}</div>
      {disposable ? (
        <div className="flex justify-center items-center -mr-2">
          <Button
            className="outline-none focus:outline-none border-0"
            onClick={onDispose}
            title="close"
          >
            <Icon icon="times-circle" />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

import React from 'react';

type NotificationProps = WithChildren<{
  className?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}>;

export default function Notification({
  type = 'error',
  className = '',
  children,
}: NotificationProps) {
  return <div className={`notification ${type} ${className}`}>{children}</div>;
}

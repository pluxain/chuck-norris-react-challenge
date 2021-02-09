import React, { MouseEventHandler } from 'react';

type Props = WithChildren<{
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}>;
export default function Button({
  children,
  className,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`btn ${className ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

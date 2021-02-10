import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
type ButtonProps = WithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: MouseEventHandler<HTMLButtonElement>;
  }
>;

export default function Button({
  children,
  onClick,
  className,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ? type : 'button'}
      className={`btn ${className ? className : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

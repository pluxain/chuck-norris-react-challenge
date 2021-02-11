import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import Icon, { IconProps } from './Icon';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon?: IconProps['icon'];
  text?: string;
};

export default function Button({
  onClick,
  icon,
  text,
  className = '',
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ? type : 'button'}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon ? <Icon icon={icon} className={text ? 'mr-2' : ''} /> : null}
      {text ? text : null}
    </button>
  );
}

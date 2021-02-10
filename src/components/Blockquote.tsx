import React from 'react';

type BlockquoteProps = WithChildren<{}>;

export default function Blockquote({ children }: BlockquoteProps) {
  return (
    <blockquote className="p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900">
      {children}
    </blockquote>
  );
}

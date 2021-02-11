import React from 'react';

type PanelProps = WithChildren<{
  className?: string;
}>;

export default function Panel({ className = '', children }: PanelProps) {
  return (
    <div
      className={`p-2 flex items-center justify-center text-xl text-center bg-gray-50 flex-grow font-extrabold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}

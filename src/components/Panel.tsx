import React from 'react';

type PanelProps = WithChildren<{
  className?: string;
}>;

export default function Panel({ className = '', children }: PanelProps) {
  return (
    <div
      className={`notification flex items-center justify-center text-xl border-gray-600 bg-gray-100 flex-grow font-extrabold tracking-tight text-gray-600 ${className}`}
    >
      {children}
    </div>
  );
}

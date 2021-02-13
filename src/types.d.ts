// @see https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
import React from 'react';
export type WithChildren<T extends Record<{ string; unknown }>> = T & {
  children?: React.ReactNode;
};

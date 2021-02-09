// @see https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
type WithChildren<T extends {}> = T & { children?: React.ReactNode };

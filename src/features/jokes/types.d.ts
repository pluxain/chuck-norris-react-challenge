import { History } from 'history';
export interface Joke {
  id: number;
  joke: string;
}

export interface Share {
  joke: Joke;
  friends: Friend[];
}

export type BaseState = {
  fetching: boolean;
  fetchError?: string;
  sharing: boolean;
  shareError?: string;
};

export type Friend = string;

type Redirecting = {
  history: History;
};

type ShareAttributes = Share & Redirecting;

export type FetchAttributes = Redirecting & {
  id?: number;
};

export interface Joke {
  id: number;
  joke: string;
}

export interface Share {
  joke: Joke;
  friends: Friend[];
}

export type JokesState = {
  joke: Joke;
  shared: Joke;
  isCommunicating: boolean;
  error: string;
};

export type Friend = string;

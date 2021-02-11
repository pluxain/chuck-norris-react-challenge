interface Joke {
  id: number;
  joke: string;
}

interface Share {
  joke: Joke;
  friends: Friend[];
}

type JokesState = {
  joke: Joke;
  shared: Joke;
  isCommunicating: boolean;
  error: string;
};

type Friend = string;

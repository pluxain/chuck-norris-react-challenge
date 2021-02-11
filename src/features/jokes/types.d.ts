interface Joke {
  id: number;
  joke: string;
}

type JokesState = {
  joke: Joke;
  isCommunicating: boolean;
  error: string;
};

interface Friend {
  email: string;
}

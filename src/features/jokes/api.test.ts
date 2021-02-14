import mockedAxios from 'axios';
import { mocked } from 'ts-jest/utils';
import { one, random, send } from 'features/jokes/api';
import { Joke } from 'features/jokes/types';

describe('Jokes api', () => {
  it('should get a random joke', async () => {
    const expected: Joke = {
      id: 123,
      joke:
        'Fugiat incididunt cupidatat quis sit et cupidatat id irure eiusmod.',
    };

    mocked(mockedAxios.get).mockResolvedValue({ data: { value: expected } });
    const actual = await random();
    expect(actual).toEqual(expected);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/jokes/random`);
  });

  it('should get a particular joke', async () => {
    const joke =
      'Fugiat incididunt cupidatat quis sit et cupidatat id irure eiusmod.';
    const id = 234;
    const expected: Joke = {
      id,
      joke,
    };

    mocked(mockedAxios.get).mockResolvedValue({
      data: { value: { id, joke } },
    });
    const actual = await one(id);
    expect(actual).toEqual(expected);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/jokes/${id}`);
  });

  it('should post a joke and list of friends to an API', async () => {
    const friends = [
      'john.doe@nowhere.com',
      'jane.doe@somewhere.net',
      'thedude@everywhere.space',
    ];
    const joke = {
      id: 123,
      joke:
        "I'll index the online RAM capacitor, that should bus the COM panel!",
    };
    const expected = {
      friends,
      joke,
    };

    mocked(mockedAxios.post).mockResolvedValue({
      data: { friends, joke },
    });

    const actual = await send(joke, friends);
    expect(actual).toEqual(expected);
    expect(mockedAxios.post).toHaveBeenCalledWith(`/shares`, { friends, joke });
  });
});

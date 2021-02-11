import mockedAxios from 'axios';
import { mocked } from 'ts-jest/utils';
import { one, random } from 'features/jokes/api';

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
});

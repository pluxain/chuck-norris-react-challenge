import mockedAxios from 'axios';
import { mocked } from 'ts-jest/utils';
import { random } from './api';
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
  });
});

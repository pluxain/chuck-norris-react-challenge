import apiClient from 'api/cncrApiClient';
import sendApiClient from 'api/sendApiClient';
import { Friend, Joke, Share } from './types';

const endpoint = '/jokes';
type JokesAPIResponse = {
  type: 'success';
  value: Joke;
};
export async function random(): Promise<Joke> {
  const res = await apiClient.get<JokesAPIResponse>(`${endpoint}/random`);
  return res.data.value;
}

export async function one(id: number): Promise<Joke> {
  const res = await apiClient.get<JokesAPIResponse>(`${endpoint}/${id}`);
  return res.data.value;
}

export async function send(joke: Joke, friends: Friend[]): Promise<Share> {
  const res = await sendApiClient.post('/shares', { friends, joke });
  return res.data;
}

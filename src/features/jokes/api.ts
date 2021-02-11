import apiClient from 'api/apiClient';
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

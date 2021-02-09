import apiClient from 'api/apiClient';
const endpoint = '/jokes';
type RandomResponse = {
  type: 'success';
  value: Joke;
};
export async function random(): Promise<Joke> {
  const res = await apiClient.get<RandomResponse>(`${endpoint}/random`);
  return res.data.value;
}

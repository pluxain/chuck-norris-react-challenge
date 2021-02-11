import axios from 'axios';
const baseURL = process.env.CLIENT_API_BASE_URL;

const apiClient = axios.create({
  baseURL,
  timeout: 3000,
});

export default apiClient;

import axios from 'axios';
const baseURL = process.env.CNRC_API_BASE_URL;

const apiClient = axios.create({
  baseURL,
  timeout: 3000,
});

export default apiClient;

import { AxiosStatic } from 'axios';
const mockedAxios = jest.createMockFromModule<AxiosStatic>('axios');
// this is the key to fix the axios.create() undefined error! @see https://stackoverflow.com/questions/51393952/mock-inner-axios-create/51414152#51414152
mockedAxios.create = jest.fn(() => mockedAxios);

export default mockedAxios;

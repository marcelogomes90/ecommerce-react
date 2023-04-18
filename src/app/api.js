import axios from 'axios';

const fakeStoreClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export default fakeStoreClient;

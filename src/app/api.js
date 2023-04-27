import axios from 'axios';

const fakeStore = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export default fakeStore;

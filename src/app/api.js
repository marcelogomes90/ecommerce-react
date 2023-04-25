import axios from 'axios';

const mockApiCollections = axios.create({
  baseURL: 'https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}',
});

export default mockApiCollections;

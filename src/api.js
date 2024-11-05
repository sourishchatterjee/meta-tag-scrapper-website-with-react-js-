// src/api.js
import axios from 'axios';

export const fetchMetaTags = async () => {
  const response = await axios.get(`http://localhost:5000/metaTags`);
  return response.data[0]; 
};

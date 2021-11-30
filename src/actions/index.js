import axios from 'axios';

export const getSecretWord = async () => {
  // TODO: write actual acion in Redux / context section
  const res = await axios.get('http://localhost:3030')
  return res.data;
};

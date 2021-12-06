import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
}

/**
 * @function correctGuess
 * @returns {object} - Action object with type `CORRECT_GUESS`
 */
export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS
  };
}

export const getSecretWord = async () => {
  // TODO: write actual acion in Redux / context section
  const res = await axios.get('http://localhost:3030')
  return res.data;
};

import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};
/**
 * @function guessWord
 * @param {string} guessedWord
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  console.log(guessedWord)
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = async () => {
  // TODO: write actual acion in Redux / context section
  const res = await axios.get('http://localhost:3030');
  return res.data;
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type `CORRECT_GUESS`
 */
export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
};

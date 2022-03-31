import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
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

/**
 * Return Redux Thunk function that initials an axios request
 *    and dispatch the response as a 'SET_SECRET_WORD' action
 * @returns {function} - Redux Thunk function
 */
export const getSecretWord = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3030');
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: res.data
    });
  }
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

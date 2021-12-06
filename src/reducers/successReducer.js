import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean}
 */
const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;

import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

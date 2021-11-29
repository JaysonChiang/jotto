import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils.js';

/**
 * @function
 *
 * @param {object} state - Initial conditions
 * @return {Wrapper} - Enzyme wraper of mounted AppComponent
 */
const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { prevenDefault() {} });

  return wrapper;
};

describe.skip('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  test('creates GuessedWords table with one row', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(1);
  });
});

describe.skip('some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessWord: 'agile', letterMatchCount: 1 }],
    });
  });

  test('guess correct word', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(2);
  });
});

describe.skip('guess secret word', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessWord: 'agile', letterMatchCount: 1 }],
    });

    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'party' } };
    inputBox.simulate('change', mockEvent);

    const submitButton = findByTestAttr(wrapper, 'submitButton');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('add row to guessedWord table', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(3);
  });

  test('displays congrats component', () => {
    const contrats = findByTestAttr(wrapper, 'component-congrats');
    expect(contrats.text().length).toBeGreaterThan(0);
  });

  test('does not display input component contents', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });
});

import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWord from './GuessedWords';

const setup = (props = {}) => shallow(<GuessedWord {...props} />);

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMAtchCount: 3 },
    { guessedWord: 'agile', letterMAtchCount: 1 },
    { guessedWord: 'party', letterMAtchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('render "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});

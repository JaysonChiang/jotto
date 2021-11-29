/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guessedWordSet = new Set(guessedWord);

  return secretLetters.filter((letter) => guessedWordSet.has(letter)).length;
};

const GuessedWord = ({ guessWords }) => {
  let contents="";
  if (guessWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWord;

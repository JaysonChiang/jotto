import './App.css';

import Congrats from './Congrats';
import Input from './Input';
import GuessedWords from './GuessedWords';

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;

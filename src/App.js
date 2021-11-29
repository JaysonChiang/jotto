import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[    { guessedWord: 'train', letterMAtchCount: 3 },
    { guessedWord: 'agile', letterMAtchCount: 1 },
    { guessedWord: 'party', letterMAtchCount: 5 },]} />
    </div>
  );
}

export default App;

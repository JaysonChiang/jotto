import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Congrats from './Congrats';
import Input from './Input';
import GuessedWords from './GuessedWords';
import { getSecretWord } from './actions';

function App() {
  const success = useSelector((state) => state.success);
  //const secretWord  = useSelector(state => state.secretWord);
  const guessedWords = useSelector((state) => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord())
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <div>The secret word is {secretWord}</div>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;

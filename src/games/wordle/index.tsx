import { useEffect, useRef, useState } from 'react';
import Grid from './components';
import Button from './components/button';
import YourResult from './components/your-result';
import { MAX_CHALLENGES } from './constants';
import { GameResult, pickRandomElement } from './lib';
import { words } from './resources/words-bank.json';

export default function Wordle() {
  const [solution, setSolution] = useState(pickRandomElement(words));

  const [triedGuess, setTriedGuess] = useState<string[]>([]);
  const [guess, setGuess] = useState<string>('');
  const [gameEnd, setGameEnd] = useState<GameResult>('playing');
  const myDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Focus on the div after it has been rendered
    if (myDivRef.current) {
      myDivRef.current.focus();
    }
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyPressed = e.key.toLowerCase();

    if (
      (keyPressed.length == 1 && keyPressed >= 'a' && keyPressed <= 'z') ||
      keyPressed === 'delete' ||
      keyPressed === 'backspace'
    ) {
      if (gameEnd == 'won' || gameEnd == 'lost') return;

      if (keyPressed === 'delete' || keyPressed === 'backspace') {
        // Handle delete/backspace
        setGuess((prevValue) => prevValue.slice(0, -1));
      } else if (guess.length < 5) {
        // Update input value with alphabet characters
        setGuess((prevValue) => prevValue + keyPressed);
      }
    }

    if (keyPressed === 'enter') {
      if (guess.length < 5) return;
      if (solution === guess) {
        setGameEnd('won');
      } else if (triedGuess.length === MAX_CHALLENGES - 1) {
        setGameEnd('lost');
      }
      setTriedGuess((triedGuess) => [...triedGuess, guess]);
      setGuess(() => '');
    }

    // Prevent the default behavior for non-alphabet characters
    if (!((keyPressed >= 'a' && keyPressed <= 'z') || keyPressed === 'delete' || keyPressed === 'backspace')) {
      e.preventDefault();
    }
  };

  const handleNewGame = () => {
    const confirmed = gameEnd != 'playing';
    if (confirmed) {
      setGameEnd('playing');
      setGuess(() => '');
      setTriedGuess(() => []);
      setSolution(pickRandomElement(words));
    }
  };
  return (
    <div
      tabIndex={0}
      ref={myDivRef}
      onKeyDown={handleKeyDown}
      className="flex grow flex-col justify-center pb-6 short:pb-2"
    >
      <div className="flex flex-row">
        <div>
          <Button onClick={handleNewGame}>New</Button>
        </div>
      </div>
      <div>
        <Grid
          currentRowClassName="test"
          guesses={triedGuess}
          currentGuess={guess}
          solution={solution}
          isRevealing={false}
        />
        {gameEnd !== 'playing' && <YourResult result={gameEnd} solution={solution} />}
      </div>
    </div>
  );
}

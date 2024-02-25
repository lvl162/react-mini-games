import { useState } from "react";
import Grid from "./components";
import { MAX_CHALLENGES } from "./constants";

type GameResult = "won" | "lost" | "playing";

export default function Wordle() {
  const [guess, setGuess] = useState<string>("");
  const [triedGuess, setTriedGuess] = useState<string[]>([]);
  const [gameEnd, setGameEnd] = useState<GameResult>("playing");
  const solution = "hello";
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyPressed = e.key.toLowerCase();
    console.log(keyPressed);
    // Filter only alphabet characters and handle delete/backspace
    if (
      (keyPressed.length == 1 && keyPressed >= "a" && keyPressed <= "z") ||
      keyPressed === "delete" ||
      keyPressed === "backspace"
    ) {
      if (gameEnd == "won" || gameEnd == "lost") return;

      if (keyPressed === "delete" || keyPressed === "backspace") {
        // Handle delete/backspace
        setGuess((prevValue) => prevValue.slice(0, -1));
      } else if (guess.length < 5) {
        // Update input value with alphabet characters
        setGuess((prevValue) => prevValue + keyPressed);
      }

      // Call the parent component's handler
      // onInputChange(inputValue);
    }

    if (keyPressed === "enter") {
      if (guess.length === 5) {
        if (solution == guess) {
          setGameEnd("won");
        } else if (triedGuess.length === MAX_CHALLENGES - 1) {
          setGameEnd("lost");
        }
        setTriedGuess((tried) => [...tried, guess]);
        setGuess("");
      }
    }

    // Prevent the default behavior for non-alphabet characters
    if (
      !(
        (keyPressed >= "a" && keyPressed <= "z") ||
        keyPressed === "delete" ||
        keyPressed === "backspace"
      )
    ) {
      e.preventDefault();
    }
  };

  const handleNewGame = () => {
    const confirmed = gameEnd != "playing";
    if (confirmed) {
      setTriedGuess([]);
      setGuess("");
      setGameEnd("playing");
    }
  };
  return (
    <div
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="flex grow flex-col justify-center pb-6 short:pb-2"
    >
      <Grid
        currentRowClassName="test"
        guesses={triedGuess}
        currentGuess={guess}
        solution={solution}
        isRevealing={false}
      />

      <div>
        <button onClick={handleNewGame}>New</button>
      </div>
      <div>
        <h1>You are {gameEnd}</h1>
      </div>
    </div>
  );
}

import { wordOfDay, unicodeSplit } from '../lib';
import { Cell } from './cell';

type Props = {
  guess: string;
  className: string;
};

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplit(guess);
  const emptyCells = Array.from(Array(wordOfDay.length - splitGuess.length));
  const classes = `flex justify-center mb-1 ${className}`;

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};

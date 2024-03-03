import { MAX_CHALLENGES } from '../constants';
import { CompletedRow } from './completed-row';
import { CurrentRow } from './current-row';
import { EmptyRow } from './empty-row';

type Props = {
  solution: string;
  guesses: string[];
  currentGuess: string;
  isRevealing?: boolean;
  currentRowClassName: string;
};

export const Grid = ({ solution, guesses, currentGuess, isRevealing, currentRowClassName }: Props) => {
  const empties = guesses.length < MAX_CHALLENGES - 1 ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length)) : [];

  return (
    <>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} solution={solution} guess={guess} isRevealing={isRevealing && guesses.length - 1 === i} />
      ))}
      {guesses.length < MAX_CHALLENGES && <CurrentRow guess={currentGuess} className={currentRowClassName} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  );
};

import { wordOfDay } from '../lib';
import { Cell } from './cell';

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(wordOfDay.length));

  return (
    <div className="mb-1 flex justify-center">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};

import React from 'react';
import classNames from 'classnames';

const Grid: React.FC = () => {
  const rows = 6;
  const cols = 5;

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            className={classNames(
              'w-10 h-10 border rounded-lg',
              'bg-gray-300',
              'hover:bg-gray-400',
              'cursor-pointer',
              'transition-colors',
              'duration-200'
            )}
            onClick={() => console.log(`Clicked on cell (${i}, ${j})`)}
          ></div>
        );
      }
      grid.push(<div key={i} className="flex justify-center">{row}</div>);
    }
    return grid;
  };

  return <div className="flex flex-col items-center mt-10 space-y-3">{generateGrid()}</div>;
};

export default Grid;
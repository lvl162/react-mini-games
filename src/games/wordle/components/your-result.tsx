import React from 'react';
import { GameResult } from '../lib';

interface YourResultProps {
    result: GameResult;
    solution: string
}

const YourResult: React.FC<YourResultProps> = ({ result, solution }) => {
    return (
        <div
            className={`result ${result === 'won' ? 'bg-green-500' : 'bg-red-500'} text-white text-center p-4 rounded-lg m-2`}
        >
            <h2 className="text-2xl font-bold">{result === 'won' ? 'You Won!' : 'You Lost'}</h2>
            <p className="mt-2">{result === 'won' ? 'Congratulations! Well done!' : <>The word was <b>{solution}</b>, better luck next time.</>}</p>
        </div>
    );
};

export default YourResult;

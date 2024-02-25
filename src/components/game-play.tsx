import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BackToHomeButton from './button/home';
import Grid from './games/wordle/grid';
import { GameContext } from '../main';

const GamePlay: React.FC = () => {
  const { id: gameId } = useParams<{ id: string }>();
  const { gamesData, user } = useContext(GameContext);
  const { id, title } = gamesData.filter(({ id }) => String(id) === gameId)?.[0]

  return (
    <div>
      <BackToHomeButton />
      <p>{user.name} is playing game {title}</p>
      <div>{
        <Grid />
      }</div>

      {/* Add your game play content here */}
    </div>
  );
};

export default GamePlay;

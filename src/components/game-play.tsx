import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Wordle from '../games/wordle';
import { GameContext } from '../main';
import BackToHomeButton from './button/home';


const GamePlay: React.FC = () => {
  const { id: gameId } = useParams<{ id: string }>();
  const { gamesData, user } = useContext(GameContext);
  const thisGame = gamesData.filter(({ id }) => String(id) === gameId);
  const isGameExists = thisGame.length > 0
  if (!isGameExists) {
    return <h1>NOT FOUND GAME</h1>
  }

  const { title } = thisGame[0];
  return (
    <div>
      <BackToHomeButton />
      <p>{user.name} is playing game {title}</p>
      <Wordle />
    </div>
  );
};

export default GamePlay;

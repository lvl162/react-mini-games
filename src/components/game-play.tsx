import React, { useContext, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Wordle from '../games/wordle';
import { GameContext } from '../main';
import { ContextType } from '../App';

const GamePlay: React.FC = () => {
  const { setTitle } = useOutletContext<ContextType>();

  const { id: gameId } = useParams<{ id: string }>();
  const { gamesData } = useContext(GameContext);
  const thisGame = gamesData.filter(({ id }) => String(id) === gameId);
  const isGameExists = thisGame.length > 0;
  if (!isGameExists) {
    return <h1>NOT FOUND GAME</h1>;
  }

  const { title } = thisGame[0];
  useEffect(() => {
    setTitle(title);
  }, []);
  return (
    <div>
      <Wordle />
    </div>
  );
};

export default GamePlay;

// App.tsx
import React, { useContext, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import GameCard from './components/game-card';
import { GameContext } from './main';

export type ContextType = { setTitle: (title: string) => void };

const App: React.FC = () => {
  const { pathname } = useLocation();
  const { gamesData } = useContext(GameContext);
  const [title, setTitle] = useState('Mini Games');
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">🎲 {title}</h1>
        </div>
        {pathname === '/' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamesData.map((game) => (
              <Link to={`/play/${game.id}`} key={game.id}>
                <GameCard title={game.title} icon={game.icon} />
              </Link>
            ))}
          </div>
        ) : null}
        <Outlet context={{ setTitle }} />
      </div>
    </div>
  );
};

export default App;

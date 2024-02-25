// App.tsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import GameCard from './components/game-card';

const gamesData = [
  { id: 1, title: 'Game 1', icon: '🎮' },
  { id: 2, title: 'Game 2', icon: '🕹️' },
  { id: 3, title: 'Game 3', icon: '🎲' },
  // Add more games as needed
];



const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">🎲 Mini Games</h1>
        </div>
        {pathname === "/" ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesData.map((game) => (
            <Link to={`/play/${game.id}`} key={game.id}>
              <GameCard title={game.title} icon={game.icon} />
            </Link>
          ))}
        </div> : null}
        <Outlet />
      </div>
    </div>
  );
};

export default App;

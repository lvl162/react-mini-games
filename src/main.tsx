import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './pages/error-page.tsx';
import GamePlay from './components/game-play.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "play/:id",
        element: <GamePlay />,
      },
    ]
  },

]);

export const GameContext = React.createContext({
  gamesData: [
    { id: 1, title: 'Game 1', icon: '🎮' },
    { id: 2, title: 'Game 2', icon: '🕹️' },
    { id: 3, title: 'Game 3', icon: '🎲' },
    // Add more games as needed
  ],
  user: {
    name: "Loi Pro"
  }
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameContext.Provider value={{
      gamesData: [
        { id: 1, title: 'Game 1', icon: '🎮' },
        { id: 2, title: 'Game 2', icon: '🕹️' },
        { id: 3, title: 'Game 3', icon: '🎲' },
        // Add more games as needed
      ],
      user: {
        name: "Loi Pro"
      }
    }}>
      <RouterProvider router={router} />
    </GameContext.Provider>
  </React.StrictMode>
);
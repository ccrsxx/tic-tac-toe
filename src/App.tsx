import { useState, useEffect } from 'react';
import { Header, Game, Footer } from './components';

export function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameMode, setGameMode] = useState('normal');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [gameWinner, setGameWinner] = useState('');
  const [nextPlayer, setNextPlayer] = useState('X');

  const handleMode = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => setGameMode(value);

  const handleClick = (index: number) => () => {
    if (gameBoard[index] || gameWinner) return;

    const newGameBoard = [...gameBoard];
    newGameBoard[index] = nextPlayer;

    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    setGameBoard(newGameBoard);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setGameMode('normal');
    setGameBoard(Array(9).fill(''));
    setGameWinner('');
    setNextPlayer('X');
  };

  return (
    <div className='App'>
      <Header />
      <Game
        playerScore={playerScore}
        computerScore={computerScore}
        gameMode={gameMode}
        gameBoard={gameBoard}
        nextPlayer={nextPlayer}
        gameWinner={gameWinner}
        handleMode={handleMode}
        handleClick={handleClick}
        resetGame={resetGame}
      />
      <Footer />
    </div>
  );
}

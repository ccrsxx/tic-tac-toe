import { useState, useEffect } from 'react';
import { Header, Game, Footer } from './components';

export function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameMode, setGameMode] = useState('normal');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [gameWinner, setGameWinner] = useState('');
  const [nextPlayer, setNextPlayer] = useState('X');

  useEffect(() => {
    if (!gameWinner) calculateWinner();
  }, [gameBoard]);

  const handleMode = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => setGameMode(value);

  const handleClick = (index: number) => () => {
    if (gameWinner || gameBoard[index]) return;

    const newGameBoard = [...gameBoard];
    newGameBoard[index] = nextPlayer;

    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    setGameBoard(newGameBoard);
  };

  const calculateWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const indexWinner = winningCombinations.find((combination) => {
      const [a, b, c] = combination;
      return (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      );
    });

    const winner = indexWinner ? gameBoard[indexWinner[0]] : null;

    if (winner) {
      setGameWinner(winner);

      gameWinner === 'X'
        ? setPlayerScore(playerScore + 1)
        : setComputerScore(computerScore + 1);
    } else if (gameBoard.every((square) => square)) {
      setGameWinner('draw');
    }
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

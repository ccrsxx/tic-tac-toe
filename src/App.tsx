import { useState, useMemo } from 'react';
import { Header, Game, Footer } from './components';

export function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameMode, setGameMode] = useState('normal');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [gameWinner, setGameWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [nextPlayer, setNextPlayer] = useState('X');
  const [isRestarted, setIsRestarted] = useState(false);

  const handleMode = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setGameMode(value);
    resetGame(true);
  };

  const handleClick = (index: number) => () => {
    if (gameWinner || gameBoard[index]) return;

    const newGameBoard = [...gameBoard];
    newGameBoard[index] = nextPlayer;

    setGameBoard(newGameBoard);
    checkWinner(newGameBoard);
  };

  const checkWinner = (newGameBoard: string[]) => {
    if (newGameBoard.every((square) => square)) {
      setGameWinner('draw');
      highlightWinner([...Array(9).keys()]);
      setTimeout(() => setGameOver(true), 600);
    }

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

    const indexWinner = winningCombinations.findIndex((combination) => {
      const [a, b, c] = combination;
      return (
        newGameBoard[a] &&
        newGameBoard[a] === newGameBoard[b] &&
        newGameBoard[a] === newGameBoard[c]
      );
    });

    const winner = indexWinner !== -1 ? winningCombinations[indexWinner] : null;

    if (winner) {
      const winnerPlayer = newGameBoard[winner[0]];

      setGameWinner(winnerPlayer);
      highlightWinner(winner);

      setTimeout(() => setGameOver(true), 600);

      winnerPlayer === 'X'
        ? setPlayerScore((prevScore) => prevScore + 1)
        : setComputerScore((prevScore) => prevScore + 1);
    } else setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
  };

  const highlightWinner = (winnerIndex: number[]) => {
    const winnerSquares = document.querySelectorAll('.square-box');

    winnerSquares.forEach(
      (square, index) =>
        winnerIndex.includes(index) && square.classList.add('active')
    );
  };

  const resetGame = (softReset = false) => {
    if (!softReset) {
      setPlayerScore(0);
      setComputerScore(0);
    }

    setIsRestarted(!isRestarted);
    setGameBoard(Array(9).fill(''));
    setGameWinner('');
    setGameOver(false);
    setNextPlayer('X');
  };

  const [gameBoardKey, gameStatusKey] = [
    useMemo(() => Math.random(), [isRestarted]),
    useMemo(() => Math.random(), [gameBoard])
  ];

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
        gameOver={gameOver}
        gameBoardKey={gameBoardKey}
        gameStatusKey={gameStatusKey}
        handleMode={handleMode}
        handleClick={handleClick}
        resetGame={resetGame}
      />
      <Footer />
    </div>
  );
}

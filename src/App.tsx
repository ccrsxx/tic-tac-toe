import { useState, useEffect, useMemo } from 'react';
import { Header, Game, Footer } from './components';
import { getNormalMove, getSmartMove, calculateWinner } from './common';

export function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerPlayer, setComputerPlayer] = useState('O');
  const [gameMode, setGameMode] = useState('normal');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [gameWinner, setGameWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [nextPlayer, setNextPlayer] = useState('X');
  const [isRestarted, setIsRestarted] = useState(false);

  useEffect(() => {
    if (!gameWinner && gameMode !== 'friend' && nextPlayer === computerPlayer) {
      const newGameBoard = [...gameBoard];

      const computerMove =
        gameMode === 'impossible'
          ? getSmartMove(newGameBoard, computerPlayer)
          : getNormalMove(newGameBoard);

      newGameBoard[computerMove] = computerPlayer;

      setTimeout(() => {
        setGameBoard(newGameBoard);
        checkWinner(newGameBoard);
      }, 500);
    }
  }, [computerPlayer, gameMode, gameBoard, gameWinner, nextPlayer]);

  const handleMode = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setGameMode(value);
    resetGame(undefined, true);
  };

  const handlePlayer = (newPlayer: string) => {
    const player = newPlayer === 'X' ? 'O' : 'X';

    if (computerPlayer === player) return;

    setComputerPlayer(player);
    resetGame(undefined, undefined, player === 'O' ? 'X' : undefined);
  };

  const handleClick = (index: number) => () => {
    if (
      gameWinner ||
      gameBoard[index] ||
      (nextPlayer === computerPlayer && gameMode !== 'friend')
    )
      return;

    const newGameBoard = [...gameBoard];
    newGameBoard[index] = nextPlayer;

    setGameBoard(newGameBoard);
    checkWinner(newGameBoard);
  };

  const checkWinner = (newGameBoard: string[]) => {
    const winner = calculateWinner(newGameBoard) as number[];

    if (winner) {
      const winnerPlayer = newGameBoard[winner[0]];

      winnerPlayer === 'X'
        ? setPlayerScore((prevScore) => prevScore + 1)
        : setComputerScore((prevScore) => prevScore + 1);

      setGameWinner(winnerPlayer);
      highlightWinner(winner);

      setTimeout(() => setGameOver(true), 1000);
    } else if (newGameBoard.every((square) => square)) {
      setGameWinner('draw');
      highlightWinner([...Array(9).keys()], true);

      setTimeout(() => setGameOver(true), 1000);
    } else setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
  };

  const highlightWinner = (winnerIndexes: number[], draw = false) => {
    const winnerSquares = document.querySelectorAll('.square-box');

    winnerSquares.forEach(
      (square, index) =>
        winnerIndexes.includes(index) &&
        square.classList.add(draw ? 'draw' : 'winner')
    );
  };

  const resetGame = (
    hardReset = false,
    resetPlayer = false,
    newNextPlayer = 'X'
  ) => {
    if (hardReset) {
      setPlayerScore(0);
      setComputerScore(0);
    }

    if (hardReset || resetPlayer) setComputerPlayer('O');

    setGameBoard(Array(9).fill(''));
    setGameWinner('');
    setGameOver(false);
    setNextPlayer(newNextPlayer);
    setIsRestarted(!isRestarted);
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
        computerPlayer={computerPlayer}
        gameMode={gameMode}
        gameBoard={gameBoard}
        nextPlayer={nextPlayer}
        gameWinner={gameWinner}
        gameOver={gameOver}
        gameBoardKey={gameBoardKey}
        gameStatusKey={gameStatusKey}
        handleMode={handleMode}
        handlePlayer={handlePlayer}
        handleClick={handleClick}
        resetGame={resetGame}
      />
      <Footer />
    </div>
  );
}

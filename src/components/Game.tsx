import { GameBoard, GameContainer } from '.';
import { GameProps } from '../types';

export function Game({
  playerScore,
  computerScore,
  computerPlayer,
  gameMode,
  gameBoard,
  gameWinner,
  gameOver,
  nextPlayer,
  gameBoardKey,
  gameStatusKey,
  handleMode,
  handlePlayer,
  handleClick,
  resetGame
}: GameProps) {
  return (
    <main className='game'>
      <GameBoard
        playerScore={playerScore}
        computerScore={computerScore}
        computerPlayer={computerPlayer}
        gameBoard={gameBoard}
        gameMode={gameMode}
        gameWinner={gameWinner}
        nextPlayer={nextPlayer}
        gameStatusKey={gameStatusKey}
        gameBoardKey={gameBoardKey}
        handleMode={handleMode}
        handlePlayer={handlePlayer}
      />
      <GameContainer
        gameBoard={gameBoard}
        gameWinner={gameWinner}
        gameOver={gameOver}
        gameBoardKey={gameBoardKey}
        handleClick={handleClick}
        resetGame={resetGame}
      />
      <button
        className='restart-game'
        type='button'
        onClick={() => resetGame(true)}
      >
        Restart game
      </button>
    </main>
  );
}

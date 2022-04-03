import { GameBoard, GameContainer } from '.';

interface GameProps {
  playerScore: number;
  computerScore: number;
  gameMode: string;
  gameBoard: string[];
  gameWinner: string;
  gameOver: boolean;
  nextPlayer: string;
  gameBoardKey: number;
  gameStatusKey: number;
  handleMode: ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClick: (index: number) => () => void;
  resetGame: (isRestarted?: boolean) => void;
}

export function Game({
  playerScore,
  computerScore,
  gameMode,
  gameBoard,
  gameWinner,
  gameOver,
  nextPlayer,
  gameBoardKey,
  gameStatusKey,
  handleMode,
  handleClick,
  resetGame
}: GameProps) {
  return (
    <main className='game'>
      <GameBoard
        playerScore={playerScore}
        computerScore={computerScore}
        gameBoard={gameBoard}
        gameMode={gameMode}
        gameWinner={gameWinner}
        nextPlayer={nextPlayer}
        gameStatusKey={gameStatusKey}
        gameBoardKey={gameBoardKey}
        handleMode={handleMode}
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
        onClick={() => resetGame()}
      >
        Restart game
      </button>
    </main>
  );
}

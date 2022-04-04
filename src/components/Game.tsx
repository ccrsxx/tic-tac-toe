import { GameBoard, GameContainer } from '.';

interface GameProps {
  playerScore: number;
  computerScore: number;
  computerPlayer: string;
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
  handlePlayer: (player: string) => void;
  handleClick: (index: number) => () => void;
  resetGame: (hardReset?: boolean, newNextPlayer?: string) => void;
}

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

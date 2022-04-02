import { GameBoard, GameContainer } from '.';

interface GameProps {
  playerScore: number;
  computerScore: number;
  gameMode: string;
  gameBoard: string[];
  gameWinner: string;
  nextPlayer: string;
  handleMode: ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClick: (index: number) => () => void;
  resetGame: () => void;
}

export function Game({
  playerScore,
  computerScore,
  gameMode,
  gameBoard,
  gameWinner,
  nextPlayer,
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
        handleMode={handleMode}
      />
      <GameContainer gameBoard={gameBoard} handleClick={handleClick} />
      <button className='restart-game' type='button' onClick={resetGame}>
        Restart game
      </button>
    </main>
  );
}

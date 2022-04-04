interface SquareBoxProps {
  square: string;
  handleClick: () => void;
}

function SquareBox({ square, handleClick }: SquareBoxProps) {
  return (
    <div className='square-box' onClick={handleClick}>
      <span
        style={{
          color:
            square === 'X' ? '#545454' : square === 'O' ? '#f2ebd3' : undefined
        }}
        className={square ? 'square active' : 'square'}
      >
        {square}
      </span>
    </div>
  );
}

interface GameContainerProps {
  gameBoard: string[];
  gameWinner: string;
  gameOver: boolean;
  gameBoardKey: number;
  handleClick: (index: number) => () => void;
  resetGame: (hardRest?: boolean, newNextPlayer?: string) => void;
}

export function GameContainer({
  gameBoard,
  gameWinner,
  gameOver,
  gameBoardKey,
  resetGame,
  handleClick
}: GameContainerProps) {
  const [xColor, oColor] = [{ color: '#545454' }, { color: '#f2ebd3' }];
  const containerProps = gameWinner
    ? {
        style: { cursor: 'pointer', zIndex: 1 },
        resetGame: () => resetGame()
      }
    : {
        style: undefined,
        resetGame: undefined
      };
  return (
    <div
      style={containerProps.style}
      className='game-container'
      onClick={containerProps.resetGame}
    >
      <div
        style={{ display: gameOver ? 'block' : 'none' }}
        className='game-over'
      >
        <h2 className='game-winner'>
          {gameWinner === 'draw' ? (
            <>
              <span style={xColor}>X</span>
              <span style={oColor}>O</span>
            </>
          ) : gameWinner === 'X' ? (
            <span style={xColor}>X</span>
          ) : (
            <span style={oColor}>O</span>
          )}
        </h2>
        <h3 className='game-text'>
          {gameWinner === 'draw' ? 'DRAW!' : 'WINNER!'}
        </h3>
      </div>
      <div
        style={{ display: gameOver ? 'none' : 'grid' }}
        className='square-container'
        key={gameBoardKey}
      >
        {gameBoard.map((square, index) => (
          <SquareBox
            key={index}
            square={square}
            handleClick={handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
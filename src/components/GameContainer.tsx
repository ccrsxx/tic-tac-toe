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
  handleClick: (index: number) => () => void;
}

export function GameContainer({ gameBoard, handleClick }: GameContainerProps) {
  return (
    <div className='game-container'>
      <div className='square-container'>
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

export interface GameProps {
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

export interface GameBoardProps {
  playerScore: number;
  computerScore: number;
  computerPlayer: string;
  gameBoard: string[];
  gameMode: string;
  gameWinner: string;
  nextPlayer: string;
  gameStatusKey: number;
  gameBoardKey: number;
  handleMode: ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePlayer: (player: string) => void;
}

export interface GameContainerProps {
  gameBoard: string[];
  gameWinner: string;
  gameOver: boolean;
  gameBoardKey: number;
  handleClick: (index: number) => () => void;
  resetGame: (hardRest?: boolean, newNextPlayer?: string) => void;
}

export interface SquareBoxProps {
  square: string;
  handleClick: () => void;
}

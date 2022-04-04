import { calculateWinner } from '.';

export const getNormalMove = (newGameBoard: string[]) => {
  const emptyIndexes = newGameBoard.reduce(
    (acc: number[], square: string, index: number) =>
      !square ? [...acc, index] : acc,
    []
  );

  const randomIndex = Math.floor(Math.random() * emptyIndexes.length);

  return emptyIndexes[randomIndex];
};

export function getSmartMove(squares: string[], maxPlayer: string) {
  if (squares.every((square) => !square)) return 0;

  const minPlayer = maxPlayer === 'X' ? 'O' : 'X';

  const minimax = (newSquares: string[], isMax: boolean) => {
    const winner = calculateWinner(newSquares, true);

    if (winner === maxPlayer) return { square: -1, score: 1 };
    if (winner === minPlayer) return { square: -1, score: -1 };

    if (newSquares.every((square) => square)) return { square: -1, score: 0 };

    const best = { square: -1, score: isMax ? -1000 : 1000 };

    for (let i = 0; i < newSquares.length; i++) {
      if (newSquares[i]) continue;

      newSquares[i] = isMax ? maxPlayer : minPlayer;

      const { score } = minimax(newSquares, !isMax);

      newSquares[i] = '';

      if (isMax) {
        if (score > best.score) {
          best.square = i;
          best.score = score;
        }
      } else if (score < best.score) {
        best.square = i;
        best.score = score;
      }
    }

    return best;
  };

  return minimax(squares, true).square;
}

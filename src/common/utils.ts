export const calculateWinner = (newGameBoard: string[], minimax = false) => {
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

  const indexWinner = winningCombinations.findIndex(
    ([a, b, c]) =>
      newGameBoard[a] &&
      newGameBoard[a] === newGameBoard[b] &&
      newGameBoard[a] === newGameBoard[c]
  );

  return indexWinner !== -1
    ? minimax
      ? newGameBoard[winningCombinations[indexWinner][0]]
      : winningCombinations[indexWinner]
    : null;
};

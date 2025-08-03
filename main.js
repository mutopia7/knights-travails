// Returns all valid knight moves from a given position on an 8x8 chessboard
function getKnightMoves([x, y]) {
  const directions = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2],
  ];

  return directions
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}

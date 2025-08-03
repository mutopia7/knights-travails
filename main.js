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


function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();

  // Each queue element: [current position, path traveled so far]
  queue.push([start, [start]]);
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    // If we reach our destination, print the route and that's it.
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }

    // All possible next moves from the current position
    const moves = getKnightMoves(current);

    for (const move of moves) {
      const key = move.toString(); // Convert to string for storage in Set
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([move, [...path, move]]);
      }
    }
  }

  // If the destination is not reached (which should not happen), return null.
  return null;
}


// Sample test
knightMoves([0, 0], [7, 7]);
const knightMoves = (start, end) => {
  const possibleMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];

  let q = [{ position: start, moves: 0, path: [start] }];
  let visited = new Set();
  let minMoves = Infinity;

  while(q.length !== 0) {
    let { position, moves, path } = q.shift();
    let [x, y] = position;

    if (x === end[0] && y === end[1]) {
      if (moves < minMoves) {
        minMoves = moves;
        console.log(`You made it in ${minMoves} moves! Here's your path:`)
        for (let i = 0; i < path.length; i++) {
          console.log(path[i]);
        };
      };
    };

    for (let i = 0; i < possibleMoves.length; i++) {
      let nwX = x + possibleMoves[i][0];
      let nwY = y + possibleMoves[i][1];
 
      if (nwX >= 0 && nwX < 8 && nwY >= 0 && nwY < 8) {
        let newPosition = [nwX, nwY];

        if (!visited.has(`${nwX},${nwY}`)) {
          visited.add(`${nwX},${nwY}`);
          q.push({
            position: newPosition,
            moves: moves + 1,
            path: [...path, newPosition],
          });
        };
      };
    };
  };

  if (minMoves === Infinity) {
    return 'No solution found';
  };
};
function knightsmove(start, end) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const queue = [[start, null]];
  const visited = new Map();

  while (queue.length) {
    let [pos, prev] = queue.shift();
    const key = pos.toString();
    visited.set(key, prev);
    if (pos[0] === end[0] && pos[1] === end[1]) {
      const path = [];
      while (pos) {
        path.unshift(pos);
        pos = visited.get(pos.toString());
      }
      console.log(visited);
      return path;
    }
    for (const [dx, dy] of moves) {
      const newPos = [pos[0] + dx, pos[1] + dy];
      const newKey = newPos.toString();
      if (
        newPos[0] >= 0 &&
        newPos[0] < 8 &&
        newPos[1] >= 0 &&
        newPos[1] < 8 &&
        !visited.has(newKey)
      ) {
        queue.push([newPos, pos]);
      }
    }
  }
  return null;
}

console.log(knightsmove([0, 0], [7, 7]));

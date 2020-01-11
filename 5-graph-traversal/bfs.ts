import { Node, node5, node1, node8 } from './graph';

// Does not handle loops
const bfs = (start: Node) => {
  const queue: Node[] = [start];
  while (queue.length) {
    const current = queue.shift()!;
    current.neighbors.forEach(n => queue.push(n));
  }
}

// Keeps track of cycles in the graph
const bfsWithCycle = (start: Node) => {
  const queue: Node[] = [start];
  const visited = new Set<Node>([start]);
  while (queue.length) {
    const current = queue.shift()!;
    current.neighbors.forEach(n => {
      if (!visited.has(n)) {
        queue.push(n);
        visited.add(n);
      }
    });
  }
}

// Keeps track of cycles in the graph
const findShortestPath = (start: Node, dest: Node) => {
  const queue: Node[] = [start];
  const visited = new Set<Node>([start]);
  const previous = new Map<Node, Node>();
  while (queue.length) {
    const current = queue.shift()!;
    current.neighbors.forEach(n => {
      if (!visited.has(n)) {
        previous.set(n, current);
        queue.push(n);
        visited.add(n);
      }
    });
  }
  if (!previous.has(dest)) {
    return undefined;
  }
  const path = [dest];
  let current = dest;
  while (current !== start) {
    current = previous.get(current)!;
    path.push(current);
  }
  return path.reverse();
}

const path1_5 = findShortestPath(node1, node5);
console.log('The shortest path between nodes #1 and #5 is', path1_5!.map(v => v.name).join(','));

const path1_8 = findShortestPath(node1, node8);
console.assert(path1_8 === undefined);


import { Node, node0, node1, node2, node5, node6 } from "./graph";

const dfs = (start: Node) => {
  const stack: Node[] = [start];
  while (stack.length) {
    const current = stack.pop()!;
    current.neighbors.forEach(n => stack.push(n))
  }
}

// Keeps track of cycles in the graph
// Keep in mind that this algorithm does not
// find the shortest path. It just finds a path,
// if such exists.
const findPath = (start: Node, dest: Node) => {
  const stack: Node[] = [start];
  const visited = new Set<Node>([start]);
  const previous = new Map<Node, Node>();
  while (stack.length) {
    const current = stack.pop()!;
    current.neighbors.forEach(n => {
      if (!visited.has(n)) {
        previous.set(n, current);
        stack.push(n);
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

const path1_5 = findPath(node1, node5);
console.log('A path between nodes #1 and #5 is', path1_5!.map(v => v.name).join(','));

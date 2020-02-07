import { Node, node0, node1, node2, node5, node6, node8, node7, node4, node3 } from './graph';

const topologicalSort = (graph: Node[]) => {
  const dfs = (node: Node) => {
    if (currentPathSet.has(node) && !resultSet.has(node)) {
      throw new Error('Cycle in the graph ' + Array.from(currentPath).map(e => e.name).join(', '));
    }
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    currentPathSet.add(node);
    currentPath.push(node);
    node.neighbors.forEach(dfs);
    result.push(node);
    resultSet.add(node);
  };

  // We keep the visited nodes here.
  // This data structure doesn't change between traversals.
  const visited = new Set<Node>();

  // We keep the visited nodes for the current traversal.
  // Here we use both an array and a set so we can preserve
  // the order but at the same time have quick look-ups.
  let currentPathSet: Set<Node>;
  let currentPath: Node[];

  // Here we keep the result of the algorithm. Notice
  // that we have resultSet and result of types respectively
  // array and set. We want to preserve the order of the
  // sorted elements, but at the same time, we want to
  // make sure we don't throw if we visit a node that
  // is already part of the result set. The set data structure
  // allows us fast look-ups.
  const result: Node[] = [];
  const resultSet = new Set<Node>();

  // We iterate over all the nodes in the graph.
  // For each node we invoke the dfs algorithm.
  // We need to do this because we don't have the guarantee
  // that the graph is connected.
  for (const node of graph) {
    currentPathSet = new Set<Node>();
    currentPath = [];
    dfs(node);
  }

  return result;
};

const order = topologicalSort([node0, node1, node2, node3, node4, node5, node6, node7, node8]);
console.log('A topological order is', order.map(v => v.name).join(', '));

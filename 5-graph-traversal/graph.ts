export interface Node {
  name: string;
  neighbors: Node[];
}

// The algorithm in practice

export const node0: Node = {
  name: '0',
  neighbors: []
};

export const node1: Node = {
  name: '1',
  neighbors: []
};

export const node2: Node = {
  name: '2',
  neighbors: []
};

export const node3: Node = {
  name: '3',
  neighbors: []
};

export const node4: Node = {
  name: '4',
  neighbors: []
};

export const node5: Node = {
  name: '5',
  neighbors: []
};

export const node6: Node = {
  name: '6',
  neighbors: []
};

export const node7: Node = {
  name: '7',
  neighbors: []
};

export const node8: Node = {
  name: '8',
  neighbors: []
};

node0.neighbors.push(node3, node5);
node1.neighbors.push(node2, node3);
node2.neighbors.push(node1);
node3.neighbors.push(node0, node4);
node4.neighbors.push(node3, node6);
node5.neighbors.push(node0, node4);
node6.neighbors.push(node4, node5);

node7.neighbors.push(node8);
node8.neighbors.push(node7);

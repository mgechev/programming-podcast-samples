export interface Comparator<T> {
  (a: T, b: T): number;
}

const swap = <T>(a: number, b: number, arr: T[]) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

export class Heap<T> {
  private _arr: T[] = [];
  constructor(private _comparator: Comparator<T>) {}

  insert(el: T) {
    let idx = this._arr.length;
    this._arr.push(el);

    while (idx) {
      const parentIdx = Math.floor(idx / 2);
      if (this._comparator(el, this._arr[parentIdx]) < 0) {
        swap(parentIdx, idx, this._arr);
        idx = parentIdx;
      } else {
        return;
      }
    }
  }

  pop(): T | undefined {
    if (!this._arr.length) {
      return undefined;
    }
    swap(0, this._arr.length - 1, this._arr);
    const result = this._arr.pop();
    this._heapify(0);
    return result;
  }

  top(): T | undefined {
    return this._arr[0];
  }

  private _heapify(start: number) {
    const len = this._arr.length;
    if (start >= len) {
      return;
    }

    const left = 2 * start + 1;
    const right = 2 * start + 2;

    let futureParent = start;
    const startVal = this._arr[start];

    if (left < len && this._comparator(this._arr[left], startVal) < 0) {
      futureParent = left;
    }

    if (right < len &&
        (this._comparator(this._arr[right], startVal) < 0 &&
         this._comparator(this._arr[right], this._arr[left]) < 0)) {
      futureParent = right;
    }

    if (futureParent !== start) {
      swap(start, futureParent, this._arr);
      this._heapify(futureParent);
    }
  }
}

const heap = new Heap<number>((a, b) => a - b);
heap.insert(5);
console.log(heap.top());

heap.insert(6);
console.log(heap.top());

heap.insert(1);
console.log(heap.top());

heap.insert(8);
console.log(heap.top());

heap.insert(-1);
console.log(heap.top());

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());

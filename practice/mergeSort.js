/**
 *
 * @param {[Number]} arr
 * @returns [Number]
 * @example
 * mergeSort([3, 2, 1]) // [1, 2, 3]
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = arr.length / 2;
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = mergeSort;

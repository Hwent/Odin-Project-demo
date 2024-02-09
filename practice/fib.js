/**
 * Iterative fib function
 * @param {number} n - The number of elements to return
 * @returns [number]
 * @example
 * fib(8) // [0, 1, 1, 2, 3, 5, 8, 13]
 
 */

function fib(n) {
  if (n === 1) {
    return [0];
  }
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

/**
 * Recursive fib function
 * @param {number} n - The number of elements to return
 * @param {number[]} arr - The array of the fibonacci sequence
 * @returns [number]
 * @example
 * fibRec(8) // [0, 1, 1, 2, 3, 5, 8, 13]
 
 */

function fibRec(n, arr = [0, 1]) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return arr;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibRec(n - 1, arr);
}

module.exports = { fib, fibRec };

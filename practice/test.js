const { fib, fibRec } = require("./fib");
const mergeSort = require("./mergeSort");
const { performance } = require("perf_hooks");

describe("Fibonacci functions", () => {
  test("fib function should return correct fibonacci sequence", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fib(2)).toEqual([0, 1]);
    expect(fib(1)).toEqual([0]);
  });

  test("fibRec function should return correct fibonacci sequence", () => {
    expect(fibRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibRec(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fib(2)).toEqual([0, 1]);
    expect(fib(1)).toEqual([0]);
  });
});

describe("mergeSort function", () => {
  test("should correctly sort an array", () => {
    const unsortedArray = [5, 3, 8, 4, 6, 1, 7, 2];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });

  test("should handle an array with duplicate values", () => {
    const unsortedArray = [5, 3, 8, 4, 6, 1, 7, 2, 5, 3];
    const sortedArray = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8];
    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });

  test("should handle an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
});

console.log("Sizes:", sizes);
console.log("Times:", times);

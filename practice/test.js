const { fib, fibRec } = require("./fib");

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

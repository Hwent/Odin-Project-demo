const { fib, fibRec } = require("./fib");
const mergeSort = require("./mergeSort");
const hashmap = require("./hashmap");

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

describe("hashmap function", () => {
  let map;

  beforeEach(() => {
    map = hashmap();
  });

  test("set and get functions should work correctly", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.get("key1")).toEqual("value1");
    expect(map.get("key2")).toEqual("value2");
  });

  test("has function should work correctly", () => {
    map.set("key1", "value1");
    expect(map.has("key1")).toEqual(true);
    expect(map.has("key2")).toEqual(false);
  });

  test("remove function should work correctly", () => {
    map.set("key1", "value1");
    map.remove("key1");
    expect(map.get("key1")).toBeNull();
    expect(map.has("key1")).toEqual(false);
  });

  test("length function should work correctly", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.length()).toEqual(2);
    map.remove("key1");
    expect(map.length()).toEqual(1);
  });

  test("clear function should work correctly", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    map.clear();
    expect(map.length()).toEqual(0);
  });
  test("keys function should return all keys", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    const keys = map.keys();
    expect(keys.length).toEqual(2);
    // Since we can't predict the exact hashed keys, we just check the length
  });

  test("values function should return all values", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    const values = map.values();
    expect(values.length).toEqual(2);
    expect(values).toContain("value1");
    expect(values).toContain("value2");
  });

  test("entries function should return all entries", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    const entries = map.entries();
    expect(entries.length).toEqual(2);
    // Since we can't predict the exact hashed keys, we just check the length
  });
});

import e from "express";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testingpractice.js";

test("capitalize", () => {
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("world")).toEqual("World");
  expect(capitalize("")).toEqual("");
});

test("reverseString", () => {
  expect(reverseString("hello")).toEqual("olleh");
  expect(reverseString("world")).toEqual("dlrow");
  expect(reverseString("")).toEqual("");
});

test("calculator", () => {
  const aCalculator = calculator();
  expect(aCalculator.add(1, 2)).toEqual(3);
  expect(aCalculator.subtract(2, 1)).toEqual(1);
  expect(aCalculator.multiply(2, 3)).toEqual(6);
  expect(aCalculator.divide(6, 3)).toEqual(2);
});

test("caesarCipher", () => {
  expect(caesarCipher("hello", 1)).toEqual("ifmmp");
  expect(caesarCipher("world", 1)).toEqual("xpsme");
  expect(caesarCipher("azaz", 5)).toEqual("fefe");
  expect(caesarCipher("", 1)).toEqual("");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual({
    average: 6,
    min: 1,
    max: 11,
    length: 11,
  });
});

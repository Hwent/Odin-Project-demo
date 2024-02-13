function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = () => {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    },
  };
};

function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      return char;
    })
    .join("");
}

const analyzeArray = (array) => {
  return {
    average: array.reduce((pre, cur) => pre + cur, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

const maxChar = (str) => {
  let obj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++
    }
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("Hello World!"))
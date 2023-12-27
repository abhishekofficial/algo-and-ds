const anagram = (str1, str2) => {
  let charMap1 = charMap(str1);
  let charMap2 = charMap(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;

}

const charMap = (str) => {
  let obj = {}
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++;
    }
  }

  return obj
}

console.log(anagram("hello", "llheo"))
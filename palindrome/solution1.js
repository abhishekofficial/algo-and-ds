const palindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(palindrome("OPPO"));
console.log(palindrome("WORK"));
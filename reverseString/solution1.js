
const reverseString = (str) => {
  let reverseStr = "";
  let i = 0;
  const strToArr = str.split("");
  const strLength = str.length;

  for (i; i < strLength; i++) {
    reverseStr = strToArr[i] + reverseStr;
  }

  return reverseStr
}
console.log(reverseString("IAmString"));

//OR We Can Use For Of Loop

const reverseString2 = (str) => {
  let reverseStr = "";

  for (let char of str) {
    reverseStr = char + reverseStr;
  }

  return reverseStr
}

console.log(reverseString2("Reverse String With For of Loop"))
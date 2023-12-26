const reverseString = (str) => {
  //reversed = acc & char = current value
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

console.log(reverseString("reverse string with reduce"))
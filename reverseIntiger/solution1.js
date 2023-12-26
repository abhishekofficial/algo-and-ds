const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1
  } else {
    return parseInt(reversed)
  }
}

console.log(reverseInt(-90))
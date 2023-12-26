const reverseInt = (n) => {
  const reversed = parseInt(n.toString().split("").reverse().join(""));

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-908))
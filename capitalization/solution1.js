const capitalization = (str) => {
  let capitalizeArr = [];
  const strToArr = str.split(" ");

  for (let word of strToArr) {
    capitalizeArr.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalizeArr.join(" ");
}

console.log(capitalization("i am fullstack developer"));
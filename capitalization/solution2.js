const capitalization = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (result[result.length - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i]
    }
  }

  return result;
}

console.log(capitalization("hello my name is abhishek"));
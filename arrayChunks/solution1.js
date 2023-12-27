const arrChunks = (arr, size) => {
  const chunkedArr = [];

  for (let elem of arr) {
    const currArr = chunkedArr[chunkedArr.length - 1];
    if (!currArr || currArr.length === size) {
      chunkedArr.push([elem])
    } else {
      currArr.push(elem);
    }
  }
  return chunkedArr;
}

console.log(arrChunks([1, 2, 3, 4, 5, 6, 7], 2))
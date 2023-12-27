const chunkedArray = (arr, size) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size))
    index += size;
  }

  return chunked;
}

console.log(chunkedArray([1, 2, 3, 4, 5], 3))
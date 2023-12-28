const steps = (n, row = 0, str = "") => {
  if (n === row) {
    return;
  }

  if (n === str.length) {
    console.log(str);
    return steps(n, row + 1);
  }

  if (str.length <= row) {
    str += "#";
  } else {
    str += " ";
  }

  steps(n, row, str);
}

steps(5);
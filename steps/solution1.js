const steps = (n) => {
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += "#"
      } else {
        step += " "
      }
    }

    console.log(step);
  }
}

steps(4)
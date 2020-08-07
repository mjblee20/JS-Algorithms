function sym() {
  let args = []
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  const arrayDiff = (arr1, arr2) => {
    let result = [];

    arr1.forEach((item) => {
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    })
    arr2.forEach((item) => {
      if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    })
    return result;
  }

  return args.reduce(arrayDiff);
}

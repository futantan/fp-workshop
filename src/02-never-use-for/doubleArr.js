function doubleArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }
  return result;
}

export default doubleArr;

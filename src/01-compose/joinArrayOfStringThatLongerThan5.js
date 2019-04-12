function joinArrayOfStringThatLongerThan5(strings) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
      result += (" " + strings[i]);
    }
  }
  return result.trim();
}


export default joinArrayOfStringThatLongerThan5;

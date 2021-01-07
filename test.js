function next(num) {
  //Convert to String for easier operations
  const chars = num.toString().split('');
  //Go through all digits backwards
  for (let i = chars.length - 1; i >= 0; i--) {
    //Skip the 0 changing it to 9. For example, for 190->199
    if (chars[i] == '0') {
      chars[i] = '9';
    } else {
      //If any other digit is encountered, change that to 9, for example, 195->199, or with both rules: 150->199
      chars[i] = '9';
      break;
    }
  }
  return parseInt(chars.join(''));
}

//Same thing, but reversed. 387 -> 380, 379 -> 300, etc
function prev(num) {
  const chars = num.toString().split('');
  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] == '9') {
      chars[i] = '0';
    } else {
      chars[i] = '0';
      break;
    }
  }
  return parseInt(chars.join(''))
}

console.log(prev(321654), next(321654))

function evil(fn) {
  return new Function('return ' + fn)();
}

const evaluateString = (string) => new Function('return ' + string)();

console.log( evil('12/5*9+9.4*2') ); // => 40.4

console.log(evaluateString('3 + 5 * 6 - 2 / 4'));
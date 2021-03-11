// const evalString = '3+5*6-2/4';

// const arr = evalString.split('');

// console.log(arr);

const evalDiv = (arrayFromString) =>
  arrayFromString.includes('/')
    ? arrayFromString.reduce((acc, cur, ind, arr) => {
        let dividing;
        if (arr[ind - 1] === '/') {
          const result = parseFloat(arr[ind - 2]) / parseFloat(arr[ind]);
          acc.pop();
          acc.pop();
          acc.push(result);
          dividing = cur;
        }
        acc.push(cur);
        if (dividing === cur) {
          acc.pop();
        }
        return acc;
      }, [])
    : arrayFromString;

// console.log(evalDiv);

const evalMult = (arrayFromEvalDiv) =>
  arrayFromEvalDiv.includes('*')
    ? arrayFromEvalDiv.reduce((acc, cur, ind, arr) => {
        let multiplying;
        if (arr[ind - 1] === '*') {
          const result = parseFloat(arr[ind - 2]) * parseFloat(arr[ind]);
          acc.pop();
          acc.pop();
          acc.push(result);
          multiplying = cur;
        }
        acc.push(cur);
        if (multiplying === cur) {
          acc.pop();
        }
        return acc;
      }, [])
    : arrayFromEvalDiv;

// console.log(evalMult);

const evalSums = (arrayFromEvalMult) =>
  arrayFromEvalMult.includes('+')
    ? arrayFromEvalMult.reduce((acc, cur, ind, arr) => {
        let summing;
        if (arr[ind - 1] === '+') {
          const result = parseFloat(arr[ind - 2]) + parseFloat(arr[ind]);
          acc.pop();
          acc.pop();
          acc.push(result);
          summing = cur;
        }
        acc.push(cur);
        if (summing === cur) {
          acc.pop();
        }
        return acc;
      }, [])
    : arrayFromEvalMult;

// console.log(evalSums);

const evalSub = (arrayFromEvalSums) =>
  arrayFromEvalSums.reduce((acc, cur, ind, arr) => {
    let subtracting;
    if (arr[ind - 1] === '-') {
      const result = parseFloat(arr[ind - 2]) - parseFloat(arr[ind]);
      acc.pop();
      acc.pop();
      acc.push(result);
      subtracting = cur;
    }
    acc.push(cur);
    if (subtracting === cur) {
      acc.pop();
    }
    return acc;
  }, []);

// console.log(evalSub);

function evilString(stringToEvil) {
  // const evalString = '3+5*6-2/4';
  const division = evalDiv(stringToEvil.split(''));
  const multiplication = evalMult(division);
  const sums = evalSums(multiplication);
  const subs = evalSub(sums);
  return subs;
}

console.log('evilString', evilString('3+5'));
console.log('evilString', evilString('9-5'));
console.log('evilString', evilString('32/4'));
console.log('evilString', evilString('3*4'));
console.log('evilString', evilString('3+5*6-2/4'));
console.log('evilString', evilString('8+5*6-2/4'));

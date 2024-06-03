function fibs(num) {
    if (num === 0) return []
    else if (num === 1) return [0];
  let firstFibNum = 0;
  let secondFibNum = 1;
  let nextFibNum = null;
  const fibSequence = [0, 1];
  for (let i = 3; i <= num; i++) {
    nextFibNum = firstFibNum + secondFibNum;
    fibSequence.push(nextFibNum);
    firstFibNum = secondFibNum;
    secondFibNum = nextFibNum;
  }
  return fibSequence;
}

function fibsRec(num) {
    if (num === 0) return []
    else if (num === 1) return [0]
    else if (num === 2) return [0, 1]
    else {
        let fibSequence = fibsRec(num - 1);
        fibSequence.push(fibSequence[fibSequence.length -1] + fibSequence[fibSequence.length - 2]);
        return fibSequence;
    }
}

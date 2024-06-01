function fibs(num) {
  let fibsSeq = [0, 1];
  if (num === 0) return [];
  else if (num === 1) return [0];
  else {
    for (let i = 3; i <= num; i++) {
      let nextNum = fibsSeq[fibsSeq.length - 1] + fibsSeq[fibsSeq.length - 2];
      fibsSeq.push(nextNum);
    }
    return fibsSeq;
  }
}

function fibRec(num) {
  if (num === 1) return [0];
  else if (num === 2) return [0, 1]
  else if (num === 0) return [];
  else {
    let fibSeq = fibRec(num - 1)
    fibSeq.push(fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1])
    return fibSeq;
  }
}
console.log(fibRec(0))
console.log(fibRec(1))
console.log(fibRec(2))
console.log(fibRec(8))
console.log(fibRec(10))
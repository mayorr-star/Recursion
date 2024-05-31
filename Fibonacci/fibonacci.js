function fibs(num) {
    let fibsSeq = [0, 1];
    if (num === 0) return [];
    else if (num === 1) return [0];
    else {
        for (let i = 3; i <= num; i++) {
            let nextNum = fibsSeq[fibsSeq.length- 1] + fibsSeq[fibsSeq.length- 2];
            fibsSeq.push(nextNum);
        }
        return fibsSeq;
    }
}


console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(3))
console.log(fibs(4))
console.log(fibs(5))
console.log(fibs(6))
console.log(fibs(7))
console.log(fibs(8))
console.log(fibs(9))
console.log(fibs(10))
function mergeArrays(leftHalf, rightHalf) {
    const mergedArray = [];
    while (leftHalf.length > 0 && rightHalf.length > 0) {
        if (leftHalf[0] < rightHalf[0]) {
            mergedArray.push(leftHalf.shift())
        } else {
            mergedArray.push(rightHalf.shift())
        }
    }
    return mergedArray.concat(leftHalf, rightHalf)
}

function mergeSort(fullArray) {
    if (fullArray.length <= 1) return fullArray;
    const midpoint = Math.floor(fullArray.length / 2);
    const leftHalf = mergeSort(fullArray.slice(0, midpoint));
    const rightHalf = mergeSort(fullArray.slice(midpoint));
    return mergeArrays(leftHalf, rightHalf)
}


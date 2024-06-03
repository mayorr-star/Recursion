// Get the first Array
// Save it to a variable called leftHalf
// Get the second array
// Save it to a variable called rightHalf
// while both arrays are not empty
// compare first elements
// If leftHalf[0] < rightHalf[0], store in a new array and remove from leftHalf
// Else store rightHalf[0] in the new array and remove from rightHalf
// if one array array is empty skip while loop and merge with the new array

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
console.log(mergeArrays([1, 3, 7], [4, 5, 6]))

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
     let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; 
        } else {
            right--;
        }
    }

    return -1;
};

// Important : 1-based

// Pseudocode:
// function(array, target){
//   set a left pointer to the first element of the array
//   set a right pointer to the last element of the array
//   loop through the array; check if left and right add to target
//   sum is less than the target, increase left pointer
//   sum is greater than the target, decrease right pointer
//   once their sum equals the target, return their indices
// }

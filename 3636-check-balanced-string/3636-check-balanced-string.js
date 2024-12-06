/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {

    let Evensum = 0
    let oddSum = 0

    for (let i = 0; i < num.length; i++) {

        if (i % 2 === 0) {
            Evensum += parseInt(num[i], 10)
        } else {
            oddSum += parseInt(num[i], 10)
        }
        
    }

    if (Evensum === oddSum) {
        return true
    } else {
        return false
    }
};
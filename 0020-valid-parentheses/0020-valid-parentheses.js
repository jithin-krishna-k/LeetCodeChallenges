/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '[' };

    for (let i = 0; i < s.length; i++) {

        const char = s[i]

        if (!characters[char]) {
            stack.push(char)
        } else {
            if (stack.pop() !== characters[char]) {
                return false
            }
        }
    }
    return stack.length === 0
};
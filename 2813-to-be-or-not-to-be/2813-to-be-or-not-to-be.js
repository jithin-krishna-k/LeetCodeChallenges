/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const errMsg=(message)=>{
        throw new Error(message) 
    }
    
    return {
        toBe:(number)=>{
           return val === number ? true : errMsg("Not Equal")
        },
        notToBe:(number)=>{
           return val !== number ? true : errMsg("Equal")
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
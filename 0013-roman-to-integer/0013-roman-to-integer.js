/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let result =0
    
    const romanToInteger ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000 
    }
    
    for(let i=0;i<s.length;i++){
        
        const currentVal = s[i]
        const nextVal = s[i+1]
        
        if(romanToInteger[currentVal] < romanToInteger[nextVal]){
            result -=romanToInteger[currentVal]
        }else{
            result +=romanToInteger[currentVal]
        }
        
    }
    
 
    return result

};
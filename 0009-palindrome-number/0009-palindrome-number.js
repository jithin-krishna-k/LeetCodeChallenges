/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    //Convert number to string using concat
    let str = x + ''
    
    let reversedStr = ""
    
    
    for(let i=str.length-1;i>=0;i--){
        reversedStr +=str[i]
    }
    
  if(str === reversedStr){
      return true
  }else{
      return false
  }
  
}
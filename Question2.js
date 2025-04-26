// 2. How to check whether a string is palindrome or not ?

const isPalindrome = (str)=>{
   if(str==""){
    return true
   }
   str = str.toLowerCase()
   let reverse_str = ""
   for(let i=str.length-1; i>=0; i--){
     reverse_str= reverse_str+str[i]
   }
   return (reverse_str===str)
}

console.log(isPalindrome("Gauri"))
console.log(isPalindrome("Nitin"))
console.log(isPalindrome(""))
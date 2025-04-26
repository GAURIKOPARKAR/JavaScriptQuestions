// 4. Program to find Reverse of a string without using built-in method ?


const reverseString = (str) =>{
    let reversestr = ""
    for(let i=str.length-1; i>=0; i--){
        reversestr = reversestr + str[i]
          
    }
    return reversestr;
}

console.log(reverseString("Gauri"))
console.log(reverseString(""))
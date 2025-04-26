// 6. Find the factorial of given number ?

const factorial=(num)=>{

    let fact = 1;
    for(let i=1 ; i<=num; i++){
       fact = fact *i
    }
   return fact;
}

console.log(factorial(4))
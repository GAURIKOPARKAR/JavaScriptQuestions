// 5. Find the max count of consecutive 1’s in an array ?

const maxconsecutiveCount = (arr) => {
    let maxCount = 0;
    let count = 0
  for (let i = 0; i < arr.length; i++) {
      if(arr[i]==1){
        count++;
        maxCount = Math.max(count, maxCount)
      }else{
       
            count = 0
        
      }
  }
  return maxCount;
};
let arr = [1,0,0,1,1,1,1,6,5,9,2,1,56,1,1,1,4,11,1,1,1,1,1]
console.log(maxconsecutiveCount(arr))

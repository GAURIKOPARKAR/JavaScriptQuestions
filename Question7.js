// 7. Given 2 arrays that are sorted  and . Merge them and sort [0,3,4,4,6,30,31] ?

const mergeArrays = (arr1 ,arr2 )=>{
  let mergearray = []
    for(let i=0; i<arr1.length; i++){
          for(let j =0;j<arr2.length;j++){
               if(arr1[i]>arr2[j]){
                mergearray.push(arr2[j])
               }
               else if(arr1[i]<=arr2[j]){
                mergearray.push(arr1[i])
                break;
               }
          }
    }
   return mergearray;
}
let arr1 =[0,3,4,31]
let arr2 =[4,6,30]
console.log(mergeArrays(arr1, arr2))
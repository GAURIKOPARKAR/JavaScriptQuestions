// // 3. Write a program to remove duplicates from an array ?

let arr = [5,6,9,2,3,4,57,6,3,2,5,0,21,2,1,1,1,1,0,5,6,5,9,10,57]

const removeduplicate = (arr)=>{
    let sortedarray = arr.sort((a,b)=>(a-b))
    console.log(sortedarray)
    let resultarray = []
    for(let i =0; i<sortedarray.length; i++){
        if(sortedarray[i]==sortedarray[i+1]){
            continue;
        }
        else{
            resultarray.push(sortedarray[i])
        }
    }
   

return resultarray
}
console.log(removeduplicate(arr))





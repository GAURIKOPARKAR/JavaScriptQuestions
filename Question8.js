// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

let arr1 = [2, 4, 5, 9];
let arr2 = [4, 16, 81 ,36,25];

const squareCheck = (arr1, arr2) => {
    if(arr1.length!=arr2.length)return false
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i] * arr1[i])) return false;
  }
  return true;
};

console.log(squareCheck(arr1,arr2))
let arr3 = [2, 2];
let arr4 = [4, 4, 4];
console.log(squareCheck(arr3, arr4)); // your code will return true, but correct answer should be false


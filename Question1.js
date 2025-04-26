// Question 1 (Program to find the longest word in a given sentence).
let str = "Hi, This is Gauri Koparkar, MERN Stack Developer."

let word_arr = str.split(" ")
let longest_word = ""
for(let i = 0; i<word_arr.length; i++){
  if(longest_word.length<word_arr[i].length){
    longest_word = word_arr[i]
  }
}
console.log(longest_word)
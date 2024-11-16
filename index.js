// reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// count the characters
function countCharacters(str, excludeSpaces = false) {
  if (excludeSpaces) {
    str = str.replace(/\s+/g, ""); // Remove all spaces
  }
  return str.length;
}

console.log(countCharacters("hello world")); 
console.log(countCharacters("hello world", true)); 


// capitilize
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


console.log(capitalizeWords("hello world")); 



// finding maximum number
function findMaximum(arr) {
  return Math.max(...arr);
}

console.log(findMaximum([3, 7, 2, 9, 4])); 


// minimum number
function findMinimum(arr) {
  return Math.min(...arr);
}


console.log(findMinimum([3, 7, 2, 9, 4]));



// Sum of array/

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumOfArray([3, 7, 2, 9, 4])); 




function filterArray(arr, condition) {
  return arr.filter(condition);
}

console.log(filterArray([3, 7, 2, 9, 4], num => num > 5));
console.log(filterArray([3, 7, 2, 9, 4], num => num % 2 === 0));






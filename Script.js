

//  function secondLargest(arr){
//      return Math.max(...arr)
//  }
//    console.log(secondLargest([10, 5, 8, 12, 3]))
// let arr = [1, 2, 3, 4, 5, 6, 67, 7, 8, 300];
// arr.sort((a, b) => b - a);
// let result = arr.filter((val) => val === arr[0]);

// console.log(result[0]); 

// Challenge 2: String Mein Kitne Vowels (Svar) Hain?
// Task: Tumhe ek function countVowels(str) likhna hai jo ek string mein kitne vowels (a, e, i, o, u) hain, yeh count kare.

// function countVowels(str){
//     let vowels = 'aeiou';
//      let count = 0
//       for(var i=0;i<str.length;i++){
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
         
//       }
//       return count
// }
//  console.log(countVowels("abdulrehman"))



// Challenge 4: Anagram Check
// Task: Tumhe ek function isAnagram(str1, str2) likhna hai jo do strings ko compare kare aur check kare ki kya dono strings anagrams hain ya nahi.

// Anagram kya hota hai?
// Do strings anagram tab hoti hain jab unmein same characters ho, unki frequency bhi same ho, bas unka order alag ho.

// function isAnagram(str1, str2) {
//      if(str1.legth !== str2.legth){
//          return false
//      }
//      return str1.split('').sort().join('') === str2.split('').sort().join('');
    
// }
//   console.log(isAnagram('replace','placese'))

// Challenge 5: Palindrome Check
// Task: Tumhe ek function isPalindrome(str) likhna hai, jo yeh check kare ki koi string palindrome hai ya nahi


// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
//  console.log(isPalindrome("madam"))







// function countVowels(str){
//     let vowels = 'aeiou';
//      let count = 0
//       for(var i=0;i<str.length;i++){
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
         
//       }
//       return count
// }
//  console.log(countVowels("abdulrehman"))


//  function countVowels (str){
//     let vowels = 'aeiou';
//      let count = 0
//       for(var i=0; i<str.length;i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count ++;
//         }
//       }
//        return count
//  }
//   console.log(countVowels("Shahroz ali"))


// Challenge 6: FizzBuzz Problem
// Task: Tumhe ek function fizzBuzz(n) likhna hai jo 1 se n tak ke numbers print kare, lekin kuch special rules ke saath:


//  function fizzBuzz(n){
//       for(var i=1; i<n;i++){
//          if(i %3 ===0){
//             console.log("Fizz")
//          }else if(i%5===0){
//             console.log("Buzz")
//          }
//           else if(i %3 ==0 && i %5==0){
//             console.log("FizzBuzz")
//           }else {
//             console.log(i);
//         }
//       }
//  }
//   fizzBuzz(17)


// Challenge 7: Factorial Find Karna

//    function  Factorial (number){
//       if(number=== 0){
//         return 1
//       }
//        let result = 1
//         for(var i=1;i<number;i++){
//             result *= i;
//         }
//          return result
//    }
//     console.log(Factorial(4))
// Next Challenge: Reverse a String
// Task: Tumhe ek function reverseString(str) likhna hai jo ek string ko reverse kare.


//  function reverseString(str){
//        return str.split("").revers().join('')
//  }
//   console.log(reverseString('rehman'))




//  function removeFalsyValues(arr){
//      return arr.filter((value)=> !!value)

//  }
//   console.log(removeFalsyValues([7, "hello", false, "", 42, null, undefined, 0]))



// function flattenArray(arr) {
//      return flattenArray
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]] ]))






//  function sumOfOddNumbers(arr) {
//       return arr.filter((valu)=> valu %2!==0).reduce((sum,num)=>sum + num ,0)
//  } 
//   console.log(sumOfOddNumbers([5,90,8,2,4,5,6,7,3,1]))



// Challenge: Find the Longest Word in a String 

// Task: Tumhe ek function findLongestWord(str) likhna hai jo ek given string mein sabse lamba word find kare.


// function findLongestWord(str){
//        let word = str.split(' ')
//        let longest= word.sort((a,b)=> b.length - a.length)[0]
//        return longest
// }
//   console.log(findLongestWord("javascripte main sb karuu ga "))







// function findLongestWord(str) {
//     let words = str.split(' '); // String ko words mein split karo
//     let longest = words.sort((a, b) => b.length - a.length)[0]; // Sort based on length (longest word first)
//     return longest;
// }

// console.log(findLongestWord("javascripte main sb karuu ga")); // Output: "jumps"







//   Basic Task Javscript logic bulider ka //



// 1) Find the Sum of Numbers in an Array

//  function isPrime (number){
//        if(number <=1){
//          return false
//        } 
//         for(var i=2; i<=Math.sqrt(number);i++){
//             if (number % i === 0) {
//                 return false;
//               }
//         }
//          return true
//  }
//   console.log(isPrime(1))









//  new problem hain codeware ki hain ya problem //
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//  function XO (str){
//     if(str === 'X'){
//        return true
//     } else if (str === 'O'){
//     return true
//  }  else {
//   return false

//  }
//  }
//   console.log(XO("))

function Xo (str){
   let lowerStr = str.toLowerCase()

   
   let xCount = lowerStr.split("x").length - 1;
   let oCount = lowerStr.split("o").length - 1;
     
   return xCount == oCount
}

console.log(Xo(`xXoo`))


 function xo(str){
    for(var i=1; i<str;i++){
           console.log(i)
    }
     return count++
 }
  console.log(xo("rehman"))




































 


    



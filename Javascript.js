  // let index = 0
  // function ClickColor(){
  //    var color =['red','prink ','yellow','black','aqua']
  //     document.getElementsByTagName('body')[0].style.background =color [index++]
  //      if(index > color.length-1){
  //        index =0
  //      }
  // }






































//  let index = 0 
//    function ClickColor(){
//      var color = ['yellow','prink','black','red']
//       document.getElementsByTagName('body')[0].style.background=color[index++]
//        if(index > color.length-1){
//          index=0
//        }
//     





//  let num = prompt('enter you a number (+, -, *, /)')
//  let num2 =''
//   switch (num) {
//     case '+':
//           console.log(num + num2)
//         break;
//     case '/':
//           console.log(num / num2)
//         break;
//     case '-':
//           console.log(num - num2)
//         break;
//     case '*':
//           console.log(num * num2)
//         break;
  
//     default:
//         break;
//   }




// Number Guessing Game//  Task 2

//   let randomNumber = Math.floor(Math.random()*10 + 1)
//    console.log(randomNumber)

//     let guess= ''
//     alert("Random number generated! Now it's your turn to guess.");
//      while( guess !== randomNumber){
//         guess = Number(prompt("Guess a number between 1 and 10:"));
//         if (isNaN(guess)) {
//             console.log("Please enter a valid number.");
//           } else if (guess > randomNumber){
//             alert("Too high! Try again.");
//          }else if( guess < randomNumber){
//             alert("Too low! Try again.");
//          }else{
//            alert("Congratulations! You guessed it right.");
//          }
//      }



//   function ReversString (str){
//      let reults = ''
//       for(let i=str.length-1; i>=0; i--){

//           reults = reults+=str[i]
//       }
//        return reults
//   }
//  console.log(ReversString("rehman")) 
//  console.log(ReversString("Javascript")) 
//  console.log(ReversString("oil")) 
//  console.log(ReversString("noor")) 





//   function ReversString (str){

     
//       return str.split('').reverse().join('')
//   }
//     console.log(ReversString("rehman1")) 
//     console.log(ReversString("rehman2")) 
//     console.log(ReversString("rehman3")) 
//     console.log(ReversString("rehman")) 
//     console.log(ReversString("rehman4")) 



//  function isage (age){
//      age=prompt("Enter you age ")
//       if(age < 18){
//        alert( "You are underage" )
//       } else if( age >=18 && age <=60){
//          alert("You are eligible")
//       } else if( age >=60 && age <=90){
//          alert("You are senior citizen")
//       }
//  }
//  isage()

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


//  for( var i=0; i<fruits.length;i++){
//      console.log(fruits[i])
//  }

// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer"
//     };
//  for(let i in person){
//      console.log(person[i])
//  }    
    
//  function checkEvenOdd (inputNumber){
//       inputNumber=Number(prompt("Enter you number"))
//         return inputNumber %2===0 ? "Even": "odd"
//  }
//   console.log(checkEvenOdd())


//  let obj={ name: "John", age: 30 }
//   console.log(obj.name='rehman', age=21)
//    console.log(obj)

     



// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// let result = removeDuplicates(arr);
// console.log( result); // [1, 2, 3, 4, 5, 6]

//  function removeDuplicates (arr,){
//      let elem = 3
//      return  arr.filter((valu,index)=>valu !=  index)
//  }
//   console.log(removeDuplicates([1,2,3,4,5,6,6,3,5]))
// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// let result = removeDuplicates(arr);
// console.log(result); // [1, 2, 3, 4, 5, 6]

// function removeDuplicates(array) {
//     return array.filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     });
// }

// Example usage:
// const inputArray = [1, 2, 2, 3, 4, 4, 5,8,7,8,9,9];
// const uniqueArray = removeDuplicates(inputArray);

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


//  function removeDuplicates (arr){
//      console.log(arr)
//      return arr.filter((value,index,self)=> self.indexOf(value) === index)
      
//     }
//     var inputarr = [1, 2, 2, 3, 4, 4, 5,8,7,8,9,9]
//      let finalreult = removeDuplicates(inputarr)
//       console.log(finalreult)

  
// let obj = {name: 'John', age: 30, occupation: 'Developer'};
//  delete obj.name
//  console.log(obj)
            

// function calculateSum(arr) {
//     let sum = 0;
//     for (let num of arr) {
//     sum += num;
//     }
//     return sum;
//     }  
//     let numbers = [1, 2, 3, 4, 5,5];
//     let result = calculateSum(numbers);
//     console.log(result); // 15
 
    




  // console.log("Hello World")

 
  //  function SumNumber (a,b){
  //      const result = a+b
  //       return result
  //  }
  //    console.log(SumNumber(10,10))


    // function isEvenNumberorOdd (inputNumber){
    //      inputNumber=prompt("Enter Your a Number")
    //      return inputNumber % 2==0? alert('Even'):alert('Odd')
    // }
    //  console.log(isEvenNumberorOdd())

    //  function  number (arr){
    //      let a = arr.filter((value,index,self)=> self.indexOf(value) === index)
    //       return a.sort((a,b)=>a-b)
    //  }
    //    let nwearr = [1,2,3,4,5,89,90,88,6,7,100,100,7]
    //     let  reulte = number(nwearr)
    //      console.log(reulte)


    // function smallestNumber (a,b,c){
    //      if (a<b && a<c){
    //        return a
    //      } else if ( b<a&& b<c){
    //        return b
    //      } else if( c<a && c<b){
    //        return c
    //      }
    // }
    //  console.log(smallestNumber(4,7,9))
  //   function smallOfThree(a, b, c){
  //     let smallNum = a < b ? (a < c ? a:c ):(b < c ? b:c);
  //     return smallNum;
  // }
  
  // console.log(smallOfThree(3, 63, -3))  // -3


  // function smallOfThree(a, b, c){
  //     let smallNum = a<b?(a<c?a:c):(b<c?b:c)
  //      return smallNum
  // }
  //  console.log(smallOfThree(12,9,10))


  //   function smallestNumber (arr){
  //       let smallNum = arr.sort((a,b)=> b-a )
  //       return smallNum[0]
  //   }
  //  console.log(smallestNumber([12,2,343,4,5,6,9000]))

  //  function FNumber (arr){
  //   let smallNum=  arr.sort((a,b)=>b-a)
  //   return smallNum[0]
  //  }

  //   let newarr = [100,300,50,70,40,2,15,95,90,125,80,200,800,700,900,1200,8000,1200]
  //     let reult = FNumber(newarr)
  //      console.log(reult)

//   function ReversString (str){
//      let reults = ''
//       for(let i=str.length-1; i>=0; i--){

//           reults = reults+=str[i]
//       }
//        return reults
//   }
//  console.log(ReversString("rehman")) 
//  console.log(ReversString("Javascript")) 
//  console.log(ReversString("oil")) 
//  console.log(ReversString("noor")) 

  //  function ReversString (str){
  //    let reults = ''
  //        for(i=str.length-1; i>=0 ; i--){
  //             reults = reults+=str[i]
  //        }
  //         return reults
  //  }
  //   console.log(ReversString("rehman"))
  //   console.log(ReversString("rehman"))

//   function Power (basic,empo){
//        let reult = basic ** empo
//          return reult
//   }

//     console.log(Power( 2,3))
//   function exponents(n,m){
//     let calculations = n**m;
//     return calculations;
// }

//  console.log(exponents(3,2))




  // function calculatePower (base,exponent){
  //       let reults = base ** exponent
  //        return reults
  // }
  //  console.log(calculatePower())

  //  function calculatePower(base,exponent) {
  //    let reults = 1
  //       for(var i=1; i<=exponent; i++){
  //           console.log(reults)
  //           reults = reults * base
  //           console.log(reults)
  //       }
  //        return reults
  //  }
  //   console.log(calculatePower(2,3))



    // function palindrome (str){
    //    if(typeof str !== "string"){
    //     throw new Error("program expect only string!")
    //    }
    //     let reverstr = str.split("").reverse().join("")
    //      return  str === reverstr ? true:false
    // }

    //  console.log(palindrome('madam'))

    //  function palindrome ( str ){
    //   let reverstr = str.split("").reverse().join("")
    //        return  str === reverstr ? 'palindrome':'not palindrome'
    //  }
    //  console.log(palindrome("level0"))



    //  function isLeap (input){
    //   if (typeof(input) != 'number') throw new Error `Enter value is not a number`;
    //      return input %4==0 ? "Leap":"notLeap"
    //  }
    //   console.log(isLeap('rehmman'))
     


  //  let names = " rehman"
  //   let obj={name:'rehma ali',age:12}
//      let hobbiess=['coding','cricket']
//      hobbiess.push('game')
//  let newarr = hobbiess.pop()
//   console.log(newarr)

// let fruits = ['apple', 'banana', 'mango'];
//   fruits.push('orange')
//    fruits.unshift("grapes")
//   console.log(fruits) 

// function reverseString(str) {
//    return str.split("").reverse().join("")
// }
//  console.log(reverseString("rehman"))

// let array1 = ['a', 'b', 'c'];
// let array2 = ['x', 'y', 'z'];
// let newarr = array1.concat(array2)
//  console.log(newarr)


//  function isEvenorOdd(input) {
//      return input %2== 0 ? "even":"odd"
//  }
//   console.log(isEvenorOdd(3))
// let nums = [12, 17, 23, 36, 42, 55];

// function getEvenNumbers(arr) {
//   let evenNums = [];
//    for(let num of arr){
//      if ( num %2 === 0){
//           evenNums.push(num)
//      }
//    }
//     return evenNums
// }
// console.log(getEvenNumbers(nums))

// let nums = [12, 17, 23, 36, 42, 55]; 

//  let num = nums.filter((value)=> value % 2=== 0)

//   console.log("filter hora hain ua ",num)

 

//  function FindtheLargestNumber(arr) {
//        let newarr =  arr.sort((a,b)=>b-a)
//         return newarr[0]

//  }
//  
//   let num = FindtheLargestNumber(randomNumbers)
//    console.log(num)
// function FindtheLargestNumber(arr) {
//   let largest = arr[0]; // Assume first element is the largest
//   for (let num of arr) {
//       if (num > largest) {
//           largest = num; // Update largest if current number is bigger
//       }
//   }
//   return largest;
// }
// console.log(FindtheLargestNumber([15, 42, 7, 99, 25,100]))

  //  function FindtheLargestNumber (arr){
  //    let largestnumber = arr[0]
  //      for(let num of arr){
  //        if(num > largestnumber){
  //          largestnumber = num
  //        }
  //      }
  //       return largestnumber
  //  }
  //  console.log(FindtheLargestNumber([15, 42, 7, 99, 25,100,700]))

  //  function findprime (limit ){
  //      for(var i=num;i<=limit;num++){
  //           let primenum = true
  //           for(var i=2;i<=num; num++){
  //             if(i %1===0){
  //               primenum= false;
  //               break;
  //             }
  //           }
  //           if (primenum) {
  //             console.log(num); // Agar prime hai, toh print karo
  //         }
  //     }
  //      }

  //  console.log(findprime(50))
//   function findPrimes(limit) {
//     for (let num = 2; num <= limit; num++) { // 2 se shuru karenge, kyunki 1 prime nahi hota
//        console.log("num",num)
//         let isPrime = true;

//         for (let i = 2; i <num; i++) {
//           console.log("i",i)
//             if (num % i === 0) {
//                 isPrime = false; // Agar num kisi aur number se divide hota hai, toh prime nahi
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(num); // Agar prime hai, toh print karo
//         }
//     }
// }

// findPrimes(50);


// function  isPrime (num){
//    if(num<=1){
//      for(var i=1;i<num; i++){
//        if (num %i===0){
//         return false; 
//        }
//      }
//    }
//   return true
// }

// console.log(isPrime(5));
// console.log(isPrime());
   

//  let fruits = ["apple", "banana","mango"]
//   let arr =fruits.slice(0,2)
//   console.log(arr)



//  let number = [10, 20, 30]
//  number.push(40)
//  number.unshift(5)
//   console.log(number)

//    let name=["Ali", "Sara", "Ahmed"]
//     for(var i of name){
//        console.log(i)
//     }
//      let cities=["Lahore", "Karachi", "Islamabad"]
//       let arr= cities.includes("Peshawar")
//        console.log(arr )


//  let numbers = [10, 15, 20, 25, 30, 35]
//  let arr = numbers.reduce((sum,value) => sum+value,0)   
//   console.log(arr)    
   
// let fruits = ["apple", "banana", "mango", "orange"];
//  let updatefruits= fruits.filter((value)=> value !== 'banana')
//   console.log(updatefruits)

//  let numbers = [10, 20, 15, 25, 30]
//  let arr = numbers.sort((a,b)=>b-a)
//   console.log(arr[1])

//  let names = ["Ali", "Sara", "Ahmed", "Bilal", "Aisha"]
//  let arr = names.filter((value)=> value.includes("A"))
//   console.log(arr)

 let words = ["apple", "pie", "banana", "kiwi", "grape"]
  let arr = words.sort((a,b)=>a.length - b.length)
   console.log(arr)
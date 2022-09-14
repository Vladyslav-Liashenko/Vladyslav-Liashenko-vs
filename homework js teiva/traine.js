//1. Using the if..else construct, write code that receives a number via prompt and then prints it to alert:
// 1 if the value is greater than zero,
// -1 if the value is less than zero,
// 0 if the value is zero.
// The user is expected to enter only numbers.

var numflat = prompt("Your appartament number?", );

if ( isNaN(Number(numflat)) ) {
  alert('Write the apartment number. NUMBER!!!');
} else if ( numflat == 0) {
  alert('Apartment number = 0 only at the administrator! Are you an administrator? I doubt.');
} else if ( numflat  > 0) {
  alert('Thank you will continue');
} else if ( numflat  < 0 ) {
  alert ('Your apartment number cannot be < 0');
};


// 2. Write an if condition to check that the value of the age variable is NOT between 14 and 90 inclusive.

var age = prompt("Your age?", );

let message = 
  isNaN(Number(age)) ? "Write the age number. NUMBER!!!"
  : age >= 14 && age <= 90 ? "Age between 14 and 90 inclusive"
  : "Age NOT between 14 and 90 inclusive";
alert(message);

// ----------- V2 ---------------------------------------------
// var age = prompt("Your age?", );

// if (isNaN(Number(age))) {
//   alert('Write the age number. NUMBER!!!');
// } else if ( age >= 14 && age <= 90 ){
//   alert('Age between 14 and 90 inclusive');
// } else {
//   alert('Age NOT between 14 and 90 inclusive');
// };
// ------------------------------------------------------------


// 3. Use the for loop to output even numbers from 2 to 10.

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( let i = 2; i < numbers.length; i += 2) {
  console.log(numbers[i]);
};


// 4. Write a loop that prompts the user to enter a number greater than 100. If the visitor entered a different number, ask them to enter it again, and so on.

var numbers100500;
do {
  numbers100500 = prompt("Write number greater than 100", );
} while ( numbers100500 <= 100 || isNaN(Number(numbers100500)));

// ----------- V2 ---------------------------------------------
// repit();
// function repit() {

// var numbers100 = prompt("Write number greater than 100", );

//   if ( isNaN(Number(numbers100)) ) {
//     alert('Write number. NUMBER!!!');
//     repit();
//   } else if ( numbers100 <= 100 && numbers100 !== null) {
//     alert('Write number greater than 100');
//     repit();
//   } else if ( numbers100 > 100) {   /////////// COMPLETED!!!!
//     alert('You are smart 😂');          
//   } 
// }
// ------------------------------------------------------------

// 1. Write a function, which finds the most frequently occurring element in an array.
var arr = [1, 2, 2, 3, 1, 1, 1];
   var counts = {};
  
for (var i in arr) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
}
console.log(counts);

// 2. Write a function, which will identify palindrome words (input-strings). (input 'dog', function returns false; input 'tenet' , function returns true;)

// ('rotator'); // true ('rotator' -> 'rotator')
// ('home'); // false ('home' -> 'emoh')
// ('Racecar'); // true (регистр игнорируется)

var target = 'Racecar';
palindrome();

function palindrome() {
  var result = '';
  var result1 = '';
  var result2 = '';

  for (let word of target) {

    result1 = word.toLocaleUpperCase().trim().replace('') + result1;

    result2 = result2 + word.toLocaleUpperCase().trim().replace('');
  }
  if (result1 === result2) {
      result = true;
    } else {
      result = false;
    }
console.log(result);
}
palindrome();

// 3. Write a function, which will convert temperature from Fahrenheit to Celsius.(input [5, 15, 38], function returns [-15, -9.4, 3.3])

var fah = [5, 15, 38]
var cel = [];

for ( var i = 0; i < fah.length; i ++) {
  let c = (fah[i] - 32)/1.8;
  cel.push(c.toFixed(1));
}
console.log(cel);
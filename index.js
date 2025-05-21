/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const total = getSum(numbers);
  const numOfItems = getLength(numbers);
  const mean = total / numOfItems;
  return mean;
}
// Get the total - use getSum(numbers) - this will be const
// Get the length - use getLength(numbers) - will also be const (re-using from what I've already done)
// Divide total by count
// Return the result

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// numbers[0] means that we are starting from the begining of the array
// loop through the array: for(let i=1; i <number.length; i++)
//                              (start;  cont. if true  ; do after each loop)
// *** start; = let i = 1; because we already used index 0 as the initial min
// if(numbers[i] < min) = is the current number smaller than min. If it is, update min.
// return

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// same as min except switch it around for finding the max

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const max = getMax(numbers);
  const min = getMin(numbers);
  const range = max - min;
  return range;
}

// need to get max = `const max = getMax(numbers)`
// need to get min = `const min = getMin(numbers)`
// find the range by subtracting min from max = `const range = max - min`
// return

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

// create the empty container ([]) so that it can insert the user array of numbers
// loop
// check if numbers are even (using the modulo operator = % 2) 
// numbers[i] % 2 === 0 means `Is this number divisible by 2 with no remainder` - if yes, it's even.
// push it into the evens array

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

// same as getEvens but change the Evens to Odds and the 2 === 0 is now 2 !== 0 ...
// ...because now it should not be divisable by 2. 

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);

//Exercise 1: Filtering Ages to Find Adults
const ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

const adults = ages.filter(checkAdult);
console.log("Adults:", adults);

//Exercise 2: Filtering Words with Length Greater Than 6
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(function (word) {
    return word.length > 6;
});

console.log("Long words:", longWords);

//Exercise 3: Filtering Numbers Greater Than or Equal to 10
function isBigEnough(value) {
    return value >= 10;
}

const filteredNumbers = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Filtered numbers:", filteredNumbers);

//Exercise 4: Filtering Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

//Exercise 5: Filtering Palindromes
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

const word = ['level', 'hello', 'radar', 'world', 'racecar'];

const palindromes = words.filter(isPalindrome);
console.log("Palindromes:", palindromes);

//Exercise 6: Filtering Strings Containing a Specific Substring
const Words = ['apple', 'banana', 'orange', 'pineapple', 'grape'];

const filteredWords = Words.filter(function (word) {
  return word.includes('apple');
});

console.log("Words containing 'apple':", filteredWords);


//Exercise 7: Filtering Arrays of Objects
const products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grape', price: 3.99 }
];

const expensiveProducts = products.filter(function (product) {
    return product.price > 2.0;
});

console.log("Expensive products:", expensiveProducts);

//Exercise 8: Filtering Arrays with Null or Undefined Values
const values = [1, null, 2, undefined, 3, 4, null, 5, undefined];

const nonNullUndefinedValues = values.filter(function (value) {
    return value !== null && value !== undefined;
});

console.log("Non-null and non-undefined values:", nonNullUndefinedValues);

//Exercise 9: Filtering Arrays Using Arrow Functions
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log("Even numbers:", EvenNumbers);
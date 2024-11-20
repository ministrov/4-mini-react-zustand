// 1 . map(): Creates a new array with the results of applying a provided function to every element in the original array.
// javascript
// CopyInsert
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 2 . filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// javascript
// CopyInsert
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
console.log(numbers2); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 3 . reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// javascript
// CopyInsert
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
console.log(numbers3); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 4 . concat(): Returns a new array that contains the elements of the original array and the elements of the arrays provided as arguments.
// javascript
// CopyInsert
const numbers4 = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const allNumbers = numbers4.concat(moreNumbers);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]
console.log(numbers4); // [1, 2, 3] (original array remains unchanged)

// 5 . slice(): Returns a new array that contains a subset of the elements of the original array.
// javascript
// CopyInsert
const numbers5 = [1, 2, 3, 4, 5];
const subset = numbers5.slice(1, 3);
console.log(subset); // [2, 3]
console.log(numbers5); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 6 . join(): Returns a string that contains the elements of the original array joined by a separator.
// javascript
// CopyInsert
const words = ['hello', 'world'];
const sentence = words.join(' ');
console.log(sentence); // 'hello world'
console.log(words); // ['hello', 'world'] (original array remains unchanged)

// 7 . every(): Returns a boolean indicating whether all elements in the original array pass the test implemented by the provided function.
// javascript
// CopyInsert
const numbers6 = [1, 2, 3, 4, 5];
const allPositive = numbers6.every((num) => num > 0);
console.log(allPositive); // true
console.log(numbers6); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 8 . some(): Returns a boolean indicating whether at least one element in the original array passes the test implemented by the provided function.
// javascript
// CopyInsert
const numbers7 = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
console.log(numbers7); // [1, 2, 3, 4, 5] (original array remains unchanged)

// 9 . includes(): Returns a boolean indicating whether the original array includes a certain element.
// javascript
// CopyInsert
const numbers8 = [1, 2, 3, 4, 5];
const hasThree = numbers8.includes(3);
console.log(hasThree); // true
console.log(numbers8); // [1, 2, 3, 4, 5] (original array remains unchanged)
// Note that these methods do not modify the original array, but instead return a new array or a value that is derived from the original array.
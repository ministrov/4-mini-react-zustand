// 1. push() - adds one or more elements to the end of an array
// typescript
// CopyInsert
const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]

// 2. pop() - removes the last element from an array
// typescript
// CopyInsert
const arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]

// 3. shift() - removes the first element from an array
// typescript
// CopyInsert
const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // [2, 3]

// 4. unshift() - adds one or more elements to the beginning of an array
// typescript
// CopyInsert
const arr4 = [1, 2, 3];
arr4.unshift(0, -1);
console.log(arr4); // [0, -1, 1, 2, 3]

// 5. splice() - removes or replaces elements in an array
// typescript
// CopyInsert
const arr5 = [1, 2, 3, 4, 5] as any;
arr5.splice(2, 2, 'a', 'b');
console.log(arr5); // [1, 2, 'a', 'b', 5]

// 6. reverse() - reverses the order of elements in an array
// typescript
// CopyInsert
const arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6); // [5, 4, 3, 2, 1]

// 7. sort() - sorts the elements of an array in place
// typescript
// CopyInsert
const arr7 = [4, 2, 5, 1, 3];
arr7.sort();
console.log(arr7); // [1, 2, 3, 4, 5]
// Note that these methods modify the original array, whereas methods like map(), filter(), and slice() return a new array without modifying the original.



// Good response



let x;

const arr = [1, 2, 3, 4, 5];

arr.reverse()
arr.unshift(6);
arr.push(0);

x = arr;

console.log(x);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = arr1.slice(0, 4).concat(arr2);
const arr3 = [...arr1, ...arr2];

arr3.splice(4, 1);

x = arr3;

console.log(x);



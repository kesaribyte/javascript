// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//=========== Array methods

// myArr.push(6)   --in push we can add elements in existing array
// myArr.push(7)
// myArr.pop()      --pop is can delected last elment in the arrays

// myArr.unshift(9)  --elemnt going to first palce of the arryas it's means going to '0' index postion
// myArr.shift()     -- majorly deleted first element

// console.log(myArr.includes(9));  ---this is checking the element of the arrays most of the time they give to us true or false "boolen"
// console.log(myArr.indexOf(3));   ---index when we ask then absolutely not give true or false they give -1 when there wiil be no element in there 

// const newArr = myArr.join()     --- this operation is chyange into a "string"

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// ==========diffrnce slice and splice=======


// slice() does not modify the original array, while splice() modifies the original array.
// slice() is used to extract/copy elements from an array, while splice() is used to add, remove, or replace elements.
// slice() returns a new array containing the selected elements, while splice() returns an array containing the removed elements
// Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.

// function range(start, end, step){
//   arr =[]
//   step = step || 1;
//   for (var i = start; i <= end; i=i+step) {
//     arr.push(i);
//   };
//   return arr
// }

// function sumArr(arr){
//   total=0;
//   arr.forEach(function(v){
//     total=total +v;
//   });
//   return total;
// }


// console.log(range(1,10));
// console.log(range(1,10,2));

// console.log(sumArr(range(1,10)));
// console.log(sumArr(range(1,10,2)));


// console.log("==reverseArray==")

// function reverseArray(arr){
//   arr2=[];

//   for (var i= arr.length; i > 0; i--) {
//     arr2.push(i);
//   };

//   return arr2;
// }

// console.log(reverseArray(range(1,10)));

// console.log("==reverseArrayInPlace==")

// function reverseArrayInPlace(arr){
//   var middleIndex = Math.floor(arr.length/2);

//   for(var i=0; i<middleIndex; i++){
//     var value = arr[i];
//     mirrorIndex = arr.length-i-1
//     mirrorValue = arr[mirrorIndex];
//     // Swap
//     arr[i] = mirrorValue;
//     arr[mirrorIndex] = value;
//   }
//   return arr;
// }
// console.log(reverseArrayInPlace(range(1,10)))


// console.log("==arrayToList==");

// function arrayToList(array)
// {
//   var list = null
//   for(var i=array.length; i>=0;i--){
//     list = {value: array[i], rest: list }
//     // console.log(list)
//   }
//   return list
// }

// console.log(arrayToList(range(1,10)))



// console.log('==deepEqual==')

// function deepEqual(a, b) {
//   if (a === b) return true;

//   console.log("1")
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object"){
//     return false;
// }

//   var propsInA = 0, propsInB = 0;

//   for (var prop in a)
//     propsInA += 1;

//   for (var prop in b) {
//     propsInB += 1;
//     if (!(prop in a) || !deepEqual(a[prop], b[prop]))
//       return false;
//   }

//   return propsInA == propsInB;
// }

// console.log(deepEqual(2,1))

// console.log('==functions==')

// function noisy(f) {
//   return function(arg) {
//     console.log("calling with", arg);
//     var val = f(arg);
//     console.log("called with", arg, "- got", val); return val;
//   };
// }

// noisy(Boolean)(0)

// b = noisy(Boolean)
// b(0)

console.log('==reduce - equivalent of inject in ruby==')

console.log([1, 2, 3, 4].reduce(
  function find_max(max, curr) {
    if (curr>max){
      return curr
    }
    else{
      min
    }
  }),
  0
);

function sum(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus);
}

console.log("====")
console.log(sum([1,2,3,4]))
console.log([1,2,3,4].sum())


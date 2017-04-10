var ANCESTRY_FILE = "./ancestry.js"
var ancestry_json = require(ANCESTRY_FILE)

var ancestry = JSON.parse(ancestry_json)
// console.log(ancestry)

// //Internal implementation of filter
// function filter(array , test) {
//   var passed = [];
//   for (var i = 0; i < array.length; i++) {
//     if (test(array[i])) passed.push(array[i]);
//   }
//   return passed;
// }

// result = filter(ancestry, function(person){
//   // console.log(a+' '+b);
//   return (person.born > 1900) && (person.born < 1925)
// })


// console.log(ancestry.filter(function(person) {
//   return person.father == "Carel Haverbeke";
// }));

// console.log("====Map over 90====")
// function overNinety(person) {
//   return person.died - person.born > 90;
// };

// console.log(ancestry.filter(overNinety).map(function(person){
//   return person.name + " " + (person.died - person.born)
// }))

// console.log("=== weird recursive shit ===")

// var byName = {};
// ancestry.forEach(function(person) {
//   byName[person.name] = person;
// });

// console.log(byName["Philibert Haverbeke"]);



// function reduceAncestors(person, f, defaultValue) {
//   function valueFor(person) {
//     if (person == null)
//       return defaultValue;
//     else{
//       mother = valueFor(byName[person.mother])
//       father = valueFor(byName[person.father])
//       console.log(mother +':'+father)
//       return f(person, mother, father);
//     }
//   }
//   return valueFor(person);
// }

// function sharedDNA(person , fromMother , fromFather) {
//   if (person.name == "Pauwels van Haverbeke")
//     return 1;
//   else
//     return (fromMother + fromFather) / 2;
// }

// var ph = byName["Philibert Haverbeke"];
// console.log(ph)
// console.log(reduceAncestors(ph, sharedDNA , 0) / 4);


// console.log ("=====Data binding=====")

// var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
// function isInSet(set, person) {
//   return set.indexOf(person.name) > -1;
// }

// console.log(ancestry.filter(function(person) {
//   return isInSet(theSet , person);
// }));

// console.log(ancestry.filter(isInSet.bind(null, theSet)));

console.log ("=====Exercises =====")

console.log ("=====flatten array of arrays=====")

test_data = [
  ["Carolus Haverbeke", "m", "1832"],
  ["Emma de Milliano",  "f", "1876"],
  ["Maria de Rycke",    "f", "1683"],
  ["Jan van Brussel",   "m", "1714"]
]

result = test_data.reduce(function(flattened, item){
  return flattened.concat(item)
  },[]
)

// console.log(result)

// console.log ("=====average age of mother-child age difference=====")

function average(array) {
  function plus(a, b) { return a + b; } return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

age_difference = ancestry.map(function(person){
  mother = byName[person.mother]
  if (mother){
    return person.born - mother.born
  }
})

// console.log(age_difference.filter(function(v){return v!=null}))
// console.log(average(age_difference.filter(function(v){return v!=null})))

console.log ("=====Historical life expectancy=====")

function groupBy(dataset, f){
  group = {}
  dataset.forEach(function(item){
    group_item = f(item)
    if (group[group_item]===undefined)
      group[group_item]=[]
    group[group_item].push(item)
  })
  return group;
}

function age(person){
  return person.died - person.born
}

byCentury = groupBy(ancestry, function(person){
  return Math.ceil(person.died / 100)
})

results={}
for(key in byCentury){
  results[key] = average(byCentury[key].map(function(person){
    return age(person)
  })
  )
}
// console.log(results)


console.log ("=====every() and some()=====")

function every(array, f){
  for(var i=0; i<array.length; i++){
    if (!f(array[i])){
      return false
    }
  }
  return true
}

function some(array, f){
  for(var i=0; i<array.length; i++){
    if (f(array[i]))
      return true
  }
  return false
}

//Test
function assert_equal(value, equal_to, msg){
  if (msg===undefined)
    msg="Value of " + value.toString() + " should be equal to: " + equal_to

  if (value!=equal_to){
    console.log('');
    console.log(new Error().stack);
    throw(msg)
  }
}


assert_equal(true, true)
assert_equal(false, false)

function lessThan5(item){
  if (item <5)
    return true
  else
    return false
}

assert_equal(some([1, 2, 3, 5, 10], lessThan5), true)
assert_equal(some([5, 6], lessThan5), false)

assert_equal(every([1, 2, 3, 4], lessThan5), true)
assert_equal(every([1, 2, 3, 4, 5], lessThan5), false)

// console.log("return..")

// console.log(
// [1,2,3,4,5].forEach(function check(item){
//   if (item<5){
//     return "Early Exit"
//   }
//   return "Finish"
// })
// )
log = console.log
// var firstName = "Peter",    lastName = "Ally";

// function showFullName() {
//   // "this" inside this function will have the value of the window object​
//   // because the showFullName () function is defined in the global scope, just like the firstName and lastName​
//   console.log (firstName + " " + lastName);
// }

// // person.fullName()

// var person = {
//   firstName   :"Penelope",
//   lastName    :"Barrymore",

//   showFullName:function () {
//     // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.​
//     console.log (this.firstName + " " + this.lastName);
//   }
// }

// // person.showFullName ();
// // var v ="ian"

// showFullName()

// We have two objects. One of them has a method called avg () that the other doesn't have​
// So we will borrow the (avg()) method​
var gameController = {
  scores  :[20, 34, 55, 46, 77],
  avgScore:null,
  players :[
  {name:"Tommy", playerID:987, age:23},
  {name:"Pau", playerID:87, age:33}
  ]
}

var appController = {
  scores  :[900, 845, 809, 950],
  avgScore:null,
  avg     :function () {
    var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
      return prev + cur;
    });

    this.avgScore = sumOfScores / this.scores.length;
  }
}
//If we run the code below,​
// the gameController.avgScore property will be set to the average score from the appController object "scores" array​

console.log("assigning the function")
gameController.avg = appController.avg;
gameController.avg()
console.log(gameController.avgScore);

console.log("using apply")
appController.avg.apply (gameController, gameController.scores);
console.log(gameController.avgScore);


// log("==appController==")
// appController.avg()
// console.log(appController);

// log("==using apply==")
// log("==appController==")
// appController.avg.apply (gameController, gameController.scores);
// log(appController);

// log("==gameController==")
// log(gameController.avgScore)

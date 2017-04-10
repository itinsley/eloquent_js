log = console.log

function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);


Object.prototype.nonsense = "hi";
for (var name in map)
  console.log(name);
// → pizza
// → touched tree
// → nonsense
console.log("nonsense" in map);
// → true
console.log("toString" in map); // → true

// Delete the problematic property again
delete Object.prototype.nonsense;

Object.defineProperty(Object.prototype , "hiddenNonsense",
  {enumerable: false, value: "hi"});

for (var name in map)
  console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// → hi

//Create an object with no prototype thus
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map); // → false
console.log("pizza" in map); // → true


log("==Vector==")
function Vector(x,y){
  this._x=x;
  this._y=y;

  this.plus = function(vector) {
    return new Vector(vector.x+this.x, vector.y+this.y)
  };

  this.minus = function(vector) {
    return new Vector(vector.x-this.x, vector.y-this.y)
  };

}
Object.defineProperty(Vector.prototype , "x", { get: function() { return this._x; }});
Object.defineProperty(Vector.prototype , "y", { get: function() { return this._y; }});
Vector.prototype.plus = function() {
  console.log("in plus")
};


onebytwo = new Vector(1,2)
log(onebytwo.plus(new Vector(3,4)))
log(onebytwo.minus(new Vector(1,2)))
// console.log(new Vector(1, 2).plus(new Vector(2, 3)));



var map = {};
function storePhi ( event , phi ) {
  map [ event ] = phi ;
}
storePhi (" pizza " , 0.069) ;
storePhi (" touched tree " , -0.081) ;

console.log( typeof map);

for ( var evt in map )
  console.log (" The correlation for '" + evt + " ' is " + map [evt]) ;
// → The correlation for ' pizza ' is 0.06
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
console.log( names[0]);
  }
  else if(strokes <= par -2){
console.log( names[1]);
  }
  else if(strokes == par-1){
console.log( names[2]);
  }
  else if(strokes == par+1){
console.log( names[3]);
  }
  else if(strokes == par+2){
console.log( names[4]);
  }
  else if(strokes >= par+3){
console.log( names[5]);
  }

  return "Change Me";
  // Only change code above this line
}
``
golfScore(5, 4);
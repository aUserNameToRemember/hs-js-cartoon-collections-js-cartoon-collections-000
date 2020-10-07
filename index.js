function dwarfRollCall(dwarves) {
  var snowWhite = []
    for (let i = 0; i < dwarves.length; i++ ) {
    
    snowWhite.push(`${i+1}. ${dwarves[i]} `)
    }
  return snowWhite.join("")
}

function summonCaptainPlanet(planeteerCalls) {
  var motherNature = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    motherNature.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return motherNature
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    
  
  if (words[i].length > 4) { 
    return true
  } else {
    }
  }
  return false
  
}

function findTheCheese (foods) {
for(let i = 0; i < foods.length; i++) {
  if (foods[i] ==="cheddar") {
    return "cheddar";
    } else if (foods[i] === "gouda") {
    return "gouda"  
    } else if (foods[i] === "camembert") {
      return foods[i]
    } else if (foods[i] === "swiss") {
      return foods[i]
}
}  
  return "no cheese!"
}

function wordsWithB(words) {
var bArray = []
 for (let i = 0; i < words.length; i++){
  if(words[i].startsWith("b")){
      bArray.push(words[i])
    }
  }
 }
 }
 

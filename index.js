function dwarfRollCall(dwarves) {
  var line = []
    for (let i = 0; i < dwarves.length; i++ ) {
    
    line.push(`${i+1}. ${dwarves[i]} `)
    }
  return line.join("")
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
    }
}  
  return "no cheese!"
}


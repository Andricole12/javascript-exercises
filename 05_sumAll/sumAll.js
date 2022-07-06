const sumAll = function(a, b) {
    let sum = 0
    let first = 0
    let last = 0
  
    if(a > b) {
      first = b
      last = a
    }
    else {
      first = a
      last = b
    }
  
    for(i=first; i<=last; i++) {
      sum += i
    }
  
    if(typeof a !== "number" || typeof b !== "number") {
      sum = 'ERROR'
    }
  
    if(sum < 0) {
      sum = 'ERROR'
    }
  
    //console.log(sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;

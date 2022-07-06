const repeatString = function(string, repeats) {
    let holdString = ''

    if(repeats < 0) {
      holdString = 'ERROR'
    }
  
    for(i = 0; i < repeats; i++) {
      holdString = holdString + string
    }
  
    return holdString;
};

// Do not edit below this line
module.exports = repeatString;

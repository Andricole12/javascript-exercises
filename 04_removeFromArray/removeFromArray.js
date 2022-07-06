const removeFromArray = function(list, removeVars) {

    for(i = 0; i < arguments.length; i++) {
      if(arguments[0].indexOf(arguments[i]) != -1) {
        if(i > 0) {
          arguments[0].splice(arguments[0].indexOf(arguments[i]), 1)
        }
      }
    }
  
    return list
};

// Do not edit below this line
module.exports = removeFromArray;

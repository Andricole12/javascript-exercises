const ftoc = function(temp) {
  let c = (temp - 32) / 1.8;
  precision = Math.pow(10, 1);
  c =  Math.ceil(c * precision) / precision;

  return c;
};

const ctof = function(temp) {
  let f = (temp * 1.8) + 32;
  precision = Math.pow(10, 1);
  f =  Math.ceil(f * precision) / precision;

  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

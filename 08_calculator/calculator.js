const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	result = 0;
  a.forEach(element => {
    result += element;
  });
  return result
};

const multiply = function(a) {
  result = 1;
  a.forEach(element => {
    result *= element;
  });
  return result
};

const power = function(a,b) {
  result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  result = 1;
	for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

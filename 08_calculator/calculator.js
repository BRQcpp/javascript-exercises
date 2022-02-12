const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  const sum = array.reduce( (item, sum) => 
    {
      return sum + item;
    }, 0);
    return sum;
};

const multiply = function(array) {
  const multiply = array.reduce( (item, sum) => 
  {
    return sum * item;
  }, 1);
  return multiply;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(base) {
	let factorial = 1;
  for(let i = 1; i <= base; i++)
    factorial *= i;
  return factorial;
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

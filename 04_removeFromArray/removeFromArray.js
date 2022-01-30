const removeFromArray = function(array, ...values) {

    array = array.filter( (array) => {
        for(let j = 0; j < values.length; j++)
                if(array === values[j])
                    return false;
            return true;
        });
   
    return array;
};

let array = removeFromArray([1,2,3,4], 2);

console.log(array);

// Do not edit below this line
module.exports = removeFromArray;

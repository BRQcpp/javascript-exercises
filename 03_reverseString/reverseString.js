const reverseString = function(string) {

    str_array = string.split("");

    for(let i = 0; i < str_array.length/2; i++)
    {
        let temp = str_array[i];
        str_array[i] = str_array[str_array.length-i-1];
        str_array[str_array.length-i-1] = temp;
    }
    
    string = str_array.join("");
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(string, repeats) {

    if(repeats === 0)
        return "";
    else if(repeats < 0)
        return "ERROR";
    return string.repeat(repeats);
};

let a = 3;

// Do not edit below this line
module.exports = repeatString;

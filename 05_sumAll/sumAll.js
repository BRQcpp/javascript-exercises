const sumAll = function(first, second) {

    if(first < 0 || second < 0 || isNaN(first) || isNaN(second) || typeof first === typeof"" || typeof second === typeof"")
        return "ERROR";

    if(first > second)
    {
        let temp;
        temp = first;
        first = second;
        second = temp;
    }

    return ((first + second)/2)* second;
};


// Do not edit below this line
module.exports = sumAll;

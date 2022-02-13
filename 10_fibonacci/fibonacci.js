const fibonacci = function(calls) {
    if (calls < 0)
        return "OOPS";
    let a = 1;
    let b = 0;
    for(let i = 0; i < calls; i++)
    {
        b += a;
        a = b - a;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

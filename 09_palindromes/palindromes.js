const palindromes = function (word) {

    let charArray = Array.from(word);
    
    charArray = charArray.filter( char =>
    {
        if(char.toUpperCase() == char.toLowerCase())
            return false;
        return true;
    });
        
    charArray = charArray.map( char =>
    {
        return char.toLowerCase();
    });
        
    for(let i = 0; i < charArray.length; i++)
    {
        if(charArray[i] != charArray[charArray.length-1-i])
            return false;
    }    
    return true;
};

// Do not edit below this line
module.exports = palindromes;

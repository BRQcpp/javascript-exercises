const findTheOldest = function(array) {
    let theOldest = array[0];
    let yearsLivedA = 0;
    let today = new Date();
    let yearsLivedB = (theOldest.yearOfDeath === undefined ? today.getFullYear() : theOldest.yearOfDeath) - theOldest.yearOfBirth;
    array.slice(1).forEach(element => 
    {
        yearsLivedA = (element.yearOfDeath === undefined ? today.getFullYear() : element.yearOfDeath) - element.yearOfBirth;
        if(yearsLivedA > yearsLivedB)
        {
            theOldest = element;
            yearsLivedB = yearsLivedA;
        }     
    });
    return theOldest;
}
// Do not edit below this line
module.exports = findTheOldest;

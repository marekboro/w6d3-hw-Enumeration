const IsogramFinder = function (word) {
    this.word = word;

}
//! An ISOGRAM is a string where each character can occur only once.
IsogramFinder.prototype.isIsogram = function () {
// one approach will be to split a string into individual characters and based on these create keys that increment, much like one of the hw extension demonstrated today. 
// once this is acomplised, loop over the values for the keys and if anything is over 1, false, otherwise true. 

wordLowerSplit = this.word.toLowerCase().split('');

const letterCount = {};
for (const character of wordLowerSplit) {
    if(letterCount[character]){
        letterCount[character] +=1;
    }
    else {
        letterCount[character]=1;
    }
}
value = true;
for (var key in letterCount){
    if(letterCount[key] != 1){
        value = false;
    }
}
return value;

}

module.exports = IsogramFinder;

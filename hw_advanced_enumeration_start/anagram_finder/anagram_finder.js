const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

//! an ANAGRAMS are words who have the same characters and same number of characters
// will borrow code from isogram to create object from word and create objects of each word in otherWords,
// will have an emty array that will get populated when there is a match.
//! This is a mess...maybe there is a simpler way.

//! sort a string, then compare it! - much simpler.
const anagrams = [];
sortedWord = this.word.sort().toLowerCase();

for (checkedWord of otherWords){
    if(checkedWord.sort().toLowerCase() === sortedWord) {
        anagrams.push(checkedWord);
    }
}
return anagrams;
}

module.exports = AnagramFinder;

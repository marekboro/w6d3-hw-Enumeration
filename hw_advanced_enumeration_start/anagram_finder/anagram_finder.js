const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

//! an ANAGRAMS are words who have the same characters and same number of characters
// will borrow code from isogram to create object from word and create objects of each word in otherWords,
// will have an emty array that will get populated when there is a match.
//! This is a mess...maybe there is a simpler way.

//! sort a string, then compare it! - much simpler.
//! FOUND MAGIC - 
const anagrams = [];
splitWord = this.word.toLowerCase().split('').sort().join("");





for (checkedWord of otherWords){
    var converted = checkedWord.toLowerCase().split('').sort().join("");
    
    
    if(converted === splitWord) {
        anagrams.push(checkedWord);
    }
}
return anagrams;
}

module.exports = AnagramFinder;


// EXPERIMENTAL
// word1 = "act"
// word2 = "cat"

// word1a = word1.toLowerCase().split('').sort().join("");
// word2a = word2.toLowerCase().split('').sort().join("");
// if (word1a == word2a){
//     console.log("Hakuna Matata");
// }
// console.log("1: ",word1a);
// console.log("2: ",word2a);
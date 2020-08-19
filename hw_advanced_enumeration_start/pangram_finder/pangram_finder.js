const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}


//! A pangram = sentence/phrase which contains every letter of the alphabet.

PangramFinder.prototype.printAlphabet = function(){
  alphaBet = this.alphabet;
  //return "hello";
  return alphaBet;
}

PangramFinder.prototype.isPangram = function () {
abc = this.alphabet; //!! to remove later.
lowerPhrase = this.phrase.toLowerCase();  // get the phrase to lowcase
splitLowerPhrase = lowerPhrase.split(''); // get the phrase split into array of individual characters
// indexOf() returns +ve if valuse exits in array
// looop over the phrase with every character in the alphabet
// return false if the alphabet character does not exit in phrase.
//cons
for (character of this.alphabet){
  if(splitLowerPhrase.indexOf(character) < 0) {
    return false;
  }
  else {
    return true;
  }
  }

// console.log(abc);
// console.log(" pause ");
// console.log(splitLowerPhrase);
  
// console.log(splitLowerPhrase.indexOf('q'));



}

module.exports = PangramFinder;



// const phrase = 'he quick brow'.split('');
// const alphabet = 'qwerty'.split('');
// const dupa = function() {
// for (character of alphabet){
//   if (character.indexOf(phrase) <0 ){
//     return false;
//   }
  
//   return true;
  
// }
// }
// console.log(dupa);

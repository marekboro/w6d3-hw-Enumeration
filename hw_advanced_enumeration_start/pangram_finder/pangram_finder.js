const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

//! A pangram = sentence/phrase which contains every letter of the alphabet.
PangramFinder.prototype.isPangram = function () {

splitLowerPhrase = this.phrase.toLowerCase().split('');

for (character of this.alphabet){
  if(splitLowerPhrase.indexOf(character) < 0) {
    return false;
  }
  else {
    return true;
  }
  }
}
module.exports = PangramFinder;

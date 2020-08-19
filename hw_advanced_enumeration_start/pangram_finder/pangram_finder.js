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

}

module.exports = PangramFinder;

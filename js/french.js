// IIFE
// joyeux noel et bonne annee
var Lang = (function(object) {
let fWords = {"joyeux", "noel",	"et", "bonne","annee"};

	return {
    translateToFrench: function(words) {
      console.log('words', words);
      let translation = fWords[words];
      console.log("translation", translation);
    }
  }

})(Lang);
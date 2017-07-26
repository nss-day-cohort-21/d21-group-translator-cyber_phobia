// IIFE
// Merry Christmas and Happy New Year 
//joyeux noel et bonne annee

var Lang = (function(object) {
let french = {
	"merry":"joyeux", 
	"christmas":"noel", 
	"and":"et", 
	"happy":"bonne", 
	"year":"annee"
};

	return {
    translateToFrench: function(words) {
      console.log('words', words);
      let translation = fWords[words];
      console.log("translation", translation);
    }
  }

})(Lang);
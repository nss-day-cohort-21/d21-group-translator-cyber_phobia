console.log('japanese.js');

var Lang = (function(object) {
  let japanese = 'Nihongo';
  let japanWords = {
  merry: 'Merri',
  christmas: 'Kurisumasu',
  and: 'soshite',
  happy: 'Hapii',
  new: 'Atarashi',
  year: 'Toshi'
};

  return {
    translateJapanese: function(words) {
      console.log('words', words);
      let translation = japanWords[words];
      console.log(translation);
    }
  }

})(Lang);





// Starwars.getEvil()
// Lang.translateJapanese

  // return {
  //   getJapan: function() {
  //     console.log('List of Japanese words', japanWords);
  //     return japanWords;
  //   },

  // Lang.getLocation = function(whatWord) {
  //   console.log('whatWord', whatWord)
  //   // let tell = true;
  //   // let
  // }


  // translateToJapanese method accepts single argument

// {"merry":"merrii",
// "christmas":" kurisumasu",
// "and":"soshite",
// "happy":"hapii",
// "new": "atarashi,
// "year":"toshi"}


// Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.
// The team must discuss and choose a single variable name that will hold all of the logic that the team creates.
// Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
// The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
// Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user. The method should return the translated text.
// The team should create an extra JavaScript file that handles interacting with the form elements and determining which method should be called.

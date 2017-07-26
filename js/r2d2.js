// dan = ["merry":"screeewp-dip-dip-dip", 
// "christmas":"wuuhooor-brrderoooah-brdrwoooooah", "and":"wudawoooooahburrp", 
// "happy":"bababweeee-burrd-eee-eee", "new":"bwoo-da-dwee-dwee", "year":"jaja-wheeeeee-dre"];




console.log('r2d2.js');

var Lang = (function() {
  let r2d2 = 'droid';
  let r2d2Words = { merry: 'screeewp-dip-dip-dip', christmas: 'wuuhooor-brrderoooah-brdrwoooooah', and: 'wudawoooooahburrp', happy: 'bababweeee-burrd-eee-eee', new: 'bwoo-da-dwee-dwee', year: 'jaja-wheeeeee-dre' };
  
//   let japanWords2 = { wishing: 'negai', you: 'kimi wa', joy: 'yorokobi', and: 'soshite', peace: 'heiwa' };
//   let japanWords3 = { best: 'Besuto', wishes: 'negai', for: 'tame ni', the: 'sono', new: 'Atarashi', year: 'Toshi' };


  return {
    translateToDroid: function(value) {
      console.log('List of R2D2 words', r2d2Words);
      return r2d2Words;
    },

    // getJapanLocation: function() {
    //   debugger
    //   return japanese;
    // },
    // addJapan: function(whatWord) {
    //   debugger
    //   japanWords.push(whatWord);
    //   console.log('jWords', japanWords);
    // }
  }

})();












//  var audio = new Audio();
//     var playlist = new Array('audio/merry0.MP3', 'audio/christmas1.MP3', 'audio/and2.MP3', 'audio/happy3.MP3', 
//     'audio/new4.MP3', 'audio/year5.MP3');

//         for (var i = 0; i <= playlist.length; i++){
//     audio.src = (playlist[i]);
//     audio.volume = 0.3;
//     audio.loop = false;
//     if (audio.ended = true)
//         i++;

//     if (i = 2) {
//         i = 0;
//     }
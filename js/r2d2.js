
console.log('r2d2.js');

var Lang = (function(object) {
  let r2d2 = 'Droid';
  let r2Words = {
  merry: 'screeewp-dip-dip-dip',
  christmas: 'wuuhooor-brrderoooah-brdrwoooooah',
  and: 'wudawoooooahburrp',
  happy: 'bababweeee-burrd-eee-eee',
  new: 'bwoo-da-dwee-dwee',
  year: 'jaja-wheeeeee-dre'
};

  return {
    translater2d2: function(words) {
      console.log('words', words);
      let translation = r2Words[words];
      console.log(translation);
    }
  }

})(Lang);
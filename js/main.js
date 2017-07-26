console.log("main.js active");


// let btnTranslate = document.getElementById('getR2D2Lang');
// btnTranslate.addEventListener('click', getR2D2Lang);

// function getR2D2Lang(event) {
//   Lang.getJapan();
  
//   function getJapanLang(event) {
//   Lang.getDroid();
    
// }



// let btnTranslate = document.getElementById('frenchLang');
// let btnTranslate = document.getElementById('spanishLang');
// let btnTranslate = document.getElementById('japanLang');
// let btnTranslate = document.getElementById('r2d2Lang');

let select = document.getElementById('selectLang');
    console.log(btnTranslate);
let words = document.getElementById('inputText').innerHTML;
    console.log(inputText.value)
let translate = document.getElementById('btnTranslate');
    btnTranslate.addEventListener('click', translateText);

    function translateText (event){
      console.log(select.value, words.value);
    }







// function japanLang(event) {
//   Lang.japanLang();
// }



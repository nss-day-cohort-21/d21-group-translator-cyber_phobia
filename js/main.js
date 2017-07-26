console.log("main.js active");


/***********  R2D2 SCRIPT  ***************/

let btnTranslate = document.getElementById('getR2D2Lang');
btnTranslate.addEventListener('click', getR2D2Lang);

function getR2D2Lang(event) {
  Lang.getJapan();
  
  function getJapanLang(event) {
  Lang.getDroid();
    
}


/*********** Japanese SCRIPT  ***************/

let btnTranslate = document.getElementById('frenchLang');
let btnTranslate = document.getElementById('spanishLang');
let btnTranslate = document.getElementById('japanLang');
let btnTranslate = document.getElementById('r2d2Lang');

btnTranslate.addEventListener('click', japanLang);

function japanLang(event) {
  Lang.japanLang();

}






/***********  SCRIPT  ***************/



console.log("main.js active");


/***********  R2D2 SCRIPT  ***************/

let btnTranslate = document.getElementById('getR2D2Lang');
btnTranslate.addEventListener('click', getR2D2Lang);

function getR2D2Lang(event) {
  Lang.getJapan();
}


/*********** Japanese SCRIPT  ***************/

let btnTranslate = document.getElementById('getJapanLang');
btnTranslate.addEventListener('click', getJapanLang);

function getJapanLang(event) {
  Lang.getDroid();
}






/***********  SCRIPT  ***************/



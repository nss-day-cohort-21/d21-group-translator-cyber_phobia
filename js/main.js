console.log("main.js active");


// let btnTranslate = document.getElementById('getR2D2Lang');
// btnTranslate.addEventListener('click', getR2D2Lang);

// function getR2D2Lang(event) {
//   Lang.getJapan();

//   function getJapanLang(event) {
//   Lang.getDroid();

// }


let select = document.getElementById('selectLang');
    console.log(btnTranslate);
let words = document.getElementById('inputText').value;
    console.log(inputText.value)
let translate = document.getElementById('btnTranslate');
    btnTranslate.addEventListener('click', translateText);

    function translateText (event) {
      let words = document.getElementById('inputText').value;
      let select = document.getElementById('selectLang').value;
        console.log(select);
      // Lang.translateJapanese(words);
      if(select === 'frenchLang'){
      return Lang.translateFrench(words);
        }else if (select === 'spanishLang'){
            return Lang.translateSpanish(words);
        }else if (select === 'japanLang'){
            return Lang.translateJapanese(words);
        }else if(select === 'r2d2Lang') {
            return Lang.translater2d2(words);
        };

        
  

    function selectLang () {
      let select = document.getElementById('selectLang').value;
      document.getElementById('textArea').innerHTML = select;
      console.log(select);
      return select;
    }
    }
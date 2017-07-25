dan = ["merry":"screeewp-dip-dip-dip", 
"christmas":"wuuhooor-brrderoooah-brdrwoooooah", "and":"wudawoooooahburrp", 
"happy":"bababweeee-burrd-eee-eee", "new":"bwoo-da-dwee-dwee", "year":"jaja-wheeeeee-dre"];

 var audio = new Audio();
    var playlist = new Array('audio/merry0.MP3', 'audio/christmas1.MP3', 'audio/and2.MP3', 'audio/happy3.MP3', 
    'audio/new4.MP3', 'audio/year5.MP3');

        for (var i = 0; i <= playlist.length; i++){
    audio.src = (playlist[i]);
    audio.volume = 0.3;
    audio.loop = false;
    if (audio.ended = true)
        i++;

    if (i = 2) {
        i = 0;
    }
let button = document.getElementById('love-btn');
let sheet = document.getElementById('love_sheet');
let note = document.getElementById('note');
button.innerHTML = "Start Love";
let isTrue = true;
let timeID;
button.addEventListener('click',function(){
    if(isTrue){
        sheet.innerHTML = "";
        note.innerText = "Note : ClicK The Button Again To Stop!";
        button,this.innerHTML = "Stop Love";
        timeID = setInterval(function(){
            sheet.innerHTML = sheet.innerHTML + "&#128151 I Love You &#128151<br>";
        },500)
        isTrue = false;
    }
    else{
        clearInterval(timeID);
        note.innerText = "";
        sheet.innerHTML = "Click The Below Button To Get My Love";
        button.innerHTML = "Start Love";
        isTrue = true;
    }
})

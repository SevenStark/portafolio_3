const idiomaActual = document.getElementById('idioma');

const titulo = document.getElementById('titulo_descripcion');
const descripcion = document.getElementById('descripcion');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const dipyexp = document.getElementById('dye');

idiomaActual.addEventListener('click',function(){
    if(idiomaActual.textContent == "ENGLISH"){
        idiomaActual.textContent = "ESPAÑOL";
    }else{
        idiomaActual.textContent = "ENGLISH";
    }

});


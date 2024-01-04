const idiomaActual = document.getElementById('idioma');

const titulo = document.getElementById('titulo_descripcion');
const descripcion = document.getElementById('descripcion');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const dipyexp = document.getElementById('dye');

titulo.textContent = "DESCRIPCION";
        descripcion.textContent = "Soy desarollardor web full stack en formacion con experiencia en la creacion de paginas web resposivas, estaticas y dinamicas que ayudan a las empresas a mostrar sus productos y retribuir su inversion en TI ";
        skill1.textContent = "-C++ | Aplicaion de delivery";
        skill2.textContent = "- ARDUINO | Manejo de actuadores de hardware";
        dipyexp.textContent = "CERTIFICACIONES Y EXPERIENCIAS";

idiomaActual.addEventListener('click',function(){
    if(idiomaActual.textContent == "ENGLISH"){
        idiomaActual.textContent = "ESPAÑOL";
        titulo.textContent = "DESCRIPTION";
        descripcion.textContent = "I am a full stack web developer in training with experience in creating responsive, static and dynamic web pages that help companies show their products and return their investment in IT";
        skill1.textContent = "-C++ | Delivery application";
        skill2.textContent = "- ARDUINO | Handling hardware actuators";
        dipyexp.textContent = "CERTIFICATIONS AND EXPERIENCES";
    }else{
        idiomaActual.textContent = "ENGLISH";
        titulo.textContent = "DESCRIPCION";
        descripcion.textContent = "Soy desarollardor web full stack en formacion con experiencia en la creacion de paginas web resposivas, estaticas y dinamicas que ayudan a las empresas a mostrar sus productos y retribuir su inversion en TI ";
        skill1.textContent = "-C++ | Aplicaion de delivery";
        skill2.textContent = "- ARDUINO | Manejo de actuadores de hardware";
        dipyexp.textContent = "CERTIFICACIONES Y EXPERIENCIAS";
    }

});


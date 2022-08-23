const opis = document.querySelector('#opis');
const tytul = document.querySelector('#tytul');
const out1 = document.querySelector("#out1")
const out2= document.querySelector("#out2")
const move ='';

opis?.addEventListener('keyup', function(){
    out1.value =String(opis.value);
})

tytul?.addEventListener('keyup', function(){
    out2.value =String(tytul.value);  
})
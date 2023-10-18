'use strick'


// aula 01
const acionarAlert = (click) => {
    alert(click)
};

//  aula 02
// não ta pegando kkkkkk NÂO USARRRRRR
const button = document.getElementById('#button')

button.onclick = function alert01(){
    alert(123);
};

// aula 03

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert('aula02')
})
'use strick'

/**
 * innerHTML = Retorna o texto, COM formatação e COM elementos HTML
 * createElement = Cria um elemento HTML
 */

const div = document.querySelector('div');

//div.innerHTML = 'texto que foi alterado';
//div.innerHTML += 'texto que foi alterado';

//div.innerHTML = `${div.innerHTML} texto que foi alterado`;

const Ul = document.createElement('ul');

[1,2,3,4,5].forEach((element) => {
    const Li = document.createElement('li');
    Li.innerText = element;
    Ul.appendChild(Li);
});

div.appendChild(Ul);


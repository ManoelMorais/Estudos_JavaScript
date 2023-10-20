'use strick';

const container = document.querySelector('.container');

// add um elemento no final, usado para colocar mais texto
container.append('Olá Manoel1');

// colocar elementos dentro do dom
const newDiv = document.createElement('div');
newDiv.innerText = 'Olá Manoel2';
container.appendChild(newDiv);


// insertBefore

const newH1 = document.querySelector('.container');
const paragrafo = newH1.querySelector('.paragrafo')

const newH2 = document.createElement('h2');
newH2.innerText = 'novo h2'

newH1.insertBefore(newH2, paragrafo)

// before after

const newP = document.createElement('p')
newP.innerText = 'Novo P'

container.after(newP)
container.before('<p>Before</p>')
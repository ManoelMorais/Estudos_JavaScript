'use strick';

/** 
 *  textContent = Retorna o texto Com formatação, mas sem os elementos HTML
 *  innnerText = Retorna somente o texto, sem formatação ou elementos HTML
 **/

const p = document.querySelector('p');

p.textContent = 'Manoel Morais';
p.innerText = '<strong>Manoel Morais</strong>';

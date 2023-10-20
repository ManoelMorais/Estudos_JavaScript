'use strick'
const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')


h1.style.color = 'purple'
h1.classList.add("active")
//pode add mais de uma class
// pode usar o remove e a class
//pode usar o toggle ele tem a função de se não tiver a class ele coloca
//se tem ele tira se não tem ele colocar, toggle

if(h1.classList.contains('active')){
    alert('class existente')
}

p.forEach((element) => {
    element.style.color = 'white';
    element.style.background = 'green';
    element.style.padding = '2rem'
})

// className

console.log(h1.className)
// ele vai pegar todas as class que tem no h1


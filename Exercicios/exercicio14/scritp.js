let numeroSorteado = 0 
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    btnSortear.style.display = 'none'

    setTimeout(function(){
        
        numeroSorteado = getRandomInt(1,6)

        console.log(numeroSorteado)

        imgDado.setAttribute('scr','img/dado/dado/'+numeroSorteado+'.png')

        sorteado.textContent = numeroSorteado

        btnSortear.style.display = 'inline-block'

        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
}
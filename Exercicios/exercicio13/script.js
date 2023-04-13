let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxNota4 = document.querySelector('#nota4')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

function calcularMedia(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4) / 4
}
function situacaoFinal(mediaFinal){
    let situacaoFinal = ''
    if (mediaFinal >=7){
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <=3){
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação(a)'
    }
    return situacaoFinal
}

function formatarSituacao(situacaoFinal){
    console.log('Situação Final' + situacaoFinal)
    switch(situacaoFinal){

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break
            
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
            break    
        
        default: 
            console.log('Situação Indefinida')
    }
}

function ValidarNumero(numero){
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    let num4 = cxNota4.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10 || num4 < 0 || num4 > 10){
        formulario.reset()
        aviso.textContent = 'Digite um número valido entre 0.0 é 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')    
        }, 2000)
    } 
}

btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let nota4 = parseFloat(cxNota4.value)
    let media = calcularMedia(nota1, nota2, nota3, nota4)

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    console.log(media)

    if(isNaN(media) || media < 0 ){
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

btnLimpar.addEventListener('click', function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})
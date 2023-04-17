const n1 = 6    //Number(prompt('Digite a nota da primeira avaliação'))
const n2 = 4    //Number(prompt('Digite a nota da segunda avaliação'))
const n3 = 6    //Number(prompt('Digite a nota da terçeira avaliação'))
const n4 = 5    //Number(prompt('Digite a nota da quarta avaliação'))

const media = (n1 + n2 + n3 + n4) / 4

const resto = (20 - media)


console.log('Á média é ' + media)
if(media >= 6){
    console.log('Aprovado, parabens')
} else if( media >=3 ){
    console.log('Recuperação, preçica de ' + resto + ' para ser aprovado')
} else {
    console.log('Reprovado')
}




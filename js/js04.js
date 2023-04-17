let anoDeVotacao = 2024
let anoDeNascimento = 2005

const idade =  anoDeVotacao - anoDeNascimento

//ar idade = 90

if (idade < 16) {
    console.log(' Não pode vota')    
} else if (idade >= 16 && idade < 18){
        console.log('Voto opcional')
} else if (idade >=18){
    console.log('Voto obrigatorio') 
} else if (idade >=65) {
    console.log('Voto opcional')
}

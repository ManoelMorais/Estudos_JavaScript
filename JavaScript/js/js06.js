var agora = new Date()
var DiaSen = agora.getDate()
//console.log(DiaSen)
switch(DiaSen) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça Feira')
        break
    case 3: 
        console.log('Quarta Feira')
        break
    case 4: 
        console.log('Quinta Feira')
        break
    case 5: 
        console.log('Sexta Feira')
        break
    case 6: 
        console.log('Sabado')
        break
}
// preçisa do break para ele não copiar todos os outros abaixo da resposta certa
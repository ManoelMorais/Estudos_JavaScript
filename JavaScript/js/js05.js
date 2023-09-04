var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12) {
    console.log('Ainda é de manhã, tenha um bom dia!')
} else if (hora <=18){
    console.log('Agora é a tarde, tenha uma boa tarde!')
} else if (hora <=23) {
    console.log('Agora é noite, tenha uma boa noite!')
} else  {
    console.log('tenha uma boa magrugada!')
} 
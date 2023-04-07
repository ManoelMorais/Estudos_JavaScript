let amigo = {
nome:'manoel',
sexo:'m', 
peso:70.4,
magro(p=0){
    console.log('Engordou')
    this.peso += p
}}


amigo.magro(10)
 console.log(`${amigo.nome} peso ${amigo.peso}Kg`)
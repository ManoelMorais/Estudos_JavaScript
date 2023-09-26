console.log(Func())

function Func(){
    return 1 + 1
}

//por de baixo dos panos ele joga a function lá pra cima
//a mesma coisa e com o var 

var x;
console.log(x)

x = 10;


// maneira errada
console.log(soma())
let soma = () => {
    return 1 + 1
}

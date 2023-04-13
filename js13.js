const salario = 3500.00    //prompt('Digite o seu salario.')
const cargo =  'Gerente'  //prompt('Digite o seu cargo.')
let aumento = 0

switch(cargo){
    case 'Estagiário': 
        aumento =  0.5 
        break
    case 'Analista': 
        aumento = 1.1 
        break
    case 'Gerente': 
        aumento = 1.5 
        break
    case 'Presidente': 
        aumento = 2.0 
        break

    default: alert('Favor escolher um cargo valido!')
}

//const novoSalario = salario + (salario * aumento)
//const novoSalario = salario * (1 + aumento)

const novoSalario = salario * aumento

console.log('O novo salario é: R$'+ novoSalario)
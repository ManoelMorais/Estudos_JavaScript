function Name(name, sobrenome){
    this.name = name;

    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto
    };
}

const Nomes = new Name("Dener", "Troquatte");

console.log(Nomes.sobrenome());


// modo 01
// function Calculadora(num1, num2){
//     this.soma = () => {
//         return `${num1 + num2}`
//     }
//     this.multipicacao= () => {
//         return `${num1 * num2}`
//     }
// }

// const resul = new Calculadora(10, 5)

// console.log(resul.soma());




// modo 02
function Calculadora(){
    this.soma = (num1, num2) => {
        return `${num1 + num2}`
    }
    this.multipicacao= (num1, num2) => {
        return `${num1 * num2}`
    }
}

const resul = new Calculadora()

console.log(resul.soma(2, 5));
console.log(resul.multipicacao(2, 5));

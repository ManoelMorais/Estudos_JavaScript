/*
    uma closure ocorre normalmene quando uma função 
    é clarada dentro do corpo de outra, e a função interior 
    referencia variáveis locais da função exterior
*/
function WhatsYourName(id){
    const msg = `O seu nome é:?`

    function name(){
        return `${msg} ${id}`
    }
    return name()
}

console.log(WhatsYourName("Manoel"));


function Calculadora(num1, num2){
    const msg = "Resultado:";


    const mais = () => {
        return `${msg} ${num1 + num2}`
    }
    const menos = () => {
        return `${msg} ${num1 - num2}`
    }
    const mult = () => {
        return `${msg} ${num1 * num2}`
    }
    const divdir = () => {
        return `${msg} ${num1 / num2}`
    }
    return {
        mais: mais(),
        menos: menos(),
        mult: mult(),
        divdir: divdir(),
    }
}

console.log(Calculadora(10, 5))
console.log(Calculadora(10, 5).mais)

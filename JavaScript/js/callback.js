/* inteoduction
function greeting(name) {
    alert("Olá " + name);
} 

function processUserInput(callback) {
    var name = prompt("Por favor insira seu nome.");
    callback(name);
}

processUserInput(greeting);

        modo 1
*/
var value = [10, 4.5, 1, 0, 20, 0.5]

/*
function callback(acumulador, currentValue, index, array){
    console.log(`acumulador`, acumulador)
    console.log(`currentValue`, currentValue)
    console.log(`index`, index)
    console.log(`array`, array)
    console.log("---")

    return acumulador + currentValue
}

value.reduce(callback, 1)
*/
/*  SOMA

let sum = value.reduce((total, item) => total + item, 0);
console.log("sum", sum)

    MEDIA

let avg = value.reduce(
    (total, item, index) => (total + item) / (index + 1),
    0
)
console.log("avg", avg)

    MAP

let double = value.reduce((total, item) => total.concat(item * 2), [])
console.log("double", double)

    FILTER
*/
let newValue = value.reduce((total, item) => {
    console.log("---")
    console.log("item", item)

    if(item > 2){
        total.push(item)
    }

    console.log("total", total)

    return total
}, [])
console.log("newValue", newValue)
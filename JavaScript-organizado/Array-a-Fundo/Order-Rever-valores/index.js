const stringArray = ["A", "W", "C", "L", "E", "B"];

console.log(stringArray.sort());
console.log(stringArray.reverse());

const numberArray = [10,30,40,20,13,15,90,0]

console.log(numberArray.sort((a, b) => a - b));
console.log(numberArray.sort((a, b) => b - a)); // inverte a ordem 
console.log(numberArray.sort((a, b) => a - b).reverse()); // inverte a ordem 

// supondo que tenha uma string com varios nome e queia ordenalas em ordem alfabetica

console.log(objectArray.sort((a, b) => a.nome.localeCampos(b, nome)));

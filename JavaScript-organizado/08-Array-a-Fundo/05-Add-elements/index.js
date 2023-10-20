/*
    unshift = add item ao inicio do Array
    push - add item no final do Array
*/

let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);

console.log(arr);




/*
    shifit = remove o primeiro elemento e retorna esse elemento
    pop = remove o último elemento e retorna esse elemento
*/

arr.shift();
arr.pop();

console.table(arr);






/*
    slice = pega os dados dentro do range sem quebrar o array
    splice = remove os dados do array dentro de um range
*/

let array = [
  { nome: "manoel", tel: "(99) 99999 9999" },
  { nome: "manoel2", tel: "(99) 99999 9999" },
  { nome: "manoel3", tel: "(99) 99999 9999" },
  { nome: "manoel4", tel: "(99) 99999 9999" },
  { nome: "manoel5", tel: "(99) 99999 9999" },
  { nome: "manoel6", tel: "(99) 99999 9999" },
];


console.table(array)

// array.splice(0, 3)

// const newArray = array.slice(2, 4);
// console.table(newArray)

console.table(array)

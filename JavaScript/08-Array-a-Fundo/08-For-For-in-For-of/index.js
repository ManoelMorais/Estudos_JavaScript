const myArray = [1, 2, 3, 4, 5, 6];

// for ([inicialização]; [condição]; [expressão final])

for (let i = 0; i <= myArray.length; i++){
    console.log(myArray[i]);
};

const myArrayObj = [
    {
        nome: "nay",
        sobrenome: "fernanda",
    },
    {
        nome: "lara",
        sobrenome: "alves",
    },
    {
        nome: "eli",
        sobrenome: "santos",
    },
];

for (let i = 0; i <= myArrayObj.length; i++){
    console.log(myArrayObj[i]);
};

// for of

for (let item of myArray){
    console.log(item)
};

// for in
const Obj = {nome: "manoel", sobrenome: "morais"};

for (let item in Obj){
    console.log(item)
};
const myArrayObj = [
    {
        nome: "nay",
        sobrenome: "fernanda",
    },
    {
        nome: "lara 1",
        sobrenome: "alves",
    },
    {
        nome: "eli 1",
        sobrenome: "santos",
    },
    {
        nome: "lara 2",
        sobrenome: "alves",
    },
    {
        nome: "eli 2",
        sobrenome: "santos",
    },
];

for (let item of myArrayObj){
    if (item.name === "nay"){
        console.log("encontrada")
        continue;
    }
    if (item.name === "eli 1"){
        console.log("encontrado")
        break;
    }
    console.log(item)
};
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

//foreach cria
//node de algo já pronto ou pode criar [1,2,3,4,5,6,7]
// element pode ser qualquer outro nome se quiser
myArrayObj.forEach(element, index => {
    console.log(element, index)
});
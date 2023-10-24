const pedidos = [
    {
        id: 12,
        nome: "manoel",
        alimento: "mec feliz",
        bebida: "coca cola",
        preco: 100,
    },
    {
        id: 24,
        nome: "nay",
        alimento: "cheddar duplo",
        bebida: "pepsi",
        preco: 40,
    },
    {
        id: 4,
        nome: "isa",
        alimento: "cachorro quente",
        bebida: "milkshake",
        preco: 10,
    },
    {
        id: 3,
        nome: "isa",
        alimento: "pizza",
        bebida: "coca cola",
        preco: 30,
    },
];

/**
 * A ideia dele é pegar todos os valores de um Array e condensá-los em um só 
**/

const resu = pedidos.reduce((total, element) => {
    return total + element.preco
}, 0);


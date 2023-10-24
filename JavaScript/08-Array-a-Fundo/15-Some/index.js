const pedidos = [
    {
        id: 12,
        nome: "manoel",
        alimento: "mec feliz",
        bebida: "coca cola",
    },
    {
        id: 24,
        nome: "nay",
        alimento: "cheddar duplo",
        bebida: "pepsi",
    },
    {
        id: 4,
        nome: "isa",
        alimento: "cachorro quente",
        bebida: "milkshake",
    },
    {
        id: 3,
        nome: "isa",
        alimento: "pizza",
        bebida: "coca cola",
    },
];

/**
 * O Some pergunta se apenas 1 dos valores do array equivale a sua condição 
**/

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "pizza";
});

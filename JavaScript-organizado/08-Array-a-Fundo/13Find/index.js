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

const findId = pedidos.find((element, index) => {
    return element.id === 12
})

// busca certiva, so encontra 1 item
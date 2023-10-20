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
        alimento: "milkshake",
        bebida: "",
    },
    {
        id: 3,
        nome: "isa",
        alimento: "pizza",
        bebida: "guarana",
    },
];

pedidos.map((element, index) => {
    if (element.id === 3 && element.alimento === "pizza"){
        return (element.alimento = "kibe")
    }
})
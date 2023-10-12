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
 * È bacana entender que, se você tem uma condição, ela vai tratar toda sua Array, 
 * assim podemos verificar se eles estão ok.
**/

const temBebi = pedidos.every((element, index) => {
  return element === "coca cola";
});

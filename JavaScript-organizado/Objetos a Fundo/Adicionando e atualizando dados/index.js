// Adicionando e Atualizando dados do Objeto

let Tenis = {
    tamanho: 45,
    estoque: true, 
};


Tenis.tamanho = 30;
Tenis.estoque = false;

Tenis.preco = "R$ 43";
Tenis["preco"] = "R$ 63";


console.log(Tenis)
console.log(Tenis["tamanho"])

// Removendo Propriedades do Objeto

delete Tenis.estoque;

console.log(Tenis)
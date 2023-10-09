const tenis = {
  tamanho: 39,
  estoque: true,
  marcas: [
    {
      nome: "nike",
    },
    {
      nome: "adidas",
    },
  ],
  secret: 123456789,
  n: 5,
  link: { a: "a", b: { c: "c" } },
};

//puxar uma infor
const {
  link: { a },
} = tenis;
console.log(a); // vai dar erro se deixar vaziu então tem que puxar o a

const {
  link: {
    b: { c },
  },
} = tenis;
console.log(c);

//quando não pussui valor axistente
const { tamanho, estoque, marcas = "Não possui marcas" } = tenis;

//escondendo o nome verdadeiro
const { secret: randonumber, n: avaliacoes } = tenis;
// mudou o nome de secret para randonumber, caso possua informações que os usuarios nn possa saber o verdadeiro nome
console.log(randonumber);

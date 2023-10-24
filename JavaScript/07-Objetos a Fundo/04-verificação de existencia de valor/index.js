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

// hasOwnProperty | propertyname in Tenis

//console.log(tenis.hasOwnProperty("tamanho"))

//console.log(tenis.hasOwnProperty("tamaho") ? "existe tenis" : "não existe tenis")

console.log("tamanho" in tenis);

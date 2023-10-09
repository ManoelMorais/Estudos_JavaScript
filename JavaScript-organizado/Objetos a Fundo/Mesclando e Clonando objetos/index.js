let Tenis = {
    tamanho: 45,
    estoque: true, 
};

let link = { link: {a: "a", b: { c: "c"}}};



// clonado
let clone1 = Tenis;

console.log(1, Tenis)
console.log(2, clone1)


// assing clona objetos e transforma em um só
let mascle1 = Object.assign(Tenis, link);
let mascle2 = { ...Tenis, ...link}

clone1.estoque = false;
mascle1.link = "abc";

console.log(3, clone1)
console.log(4, Tenis)
console.log(5, mascle1)
console.log(6, mascle2)


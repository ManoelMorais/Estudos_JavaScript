let Tenis = {
  tamanho: 45,
  estoque: true,
};

let link = { link: { a: "a", b: { c: "c" } } };

// modo 1
// let clone1 = JSON.stringify(Tenis);
// clone1 = JSON.parse(clone1)

// modo 2
let clone1 = JSON.parse(JSON.stringify(Tenis));

clone1.estoque = false;

function cloneObject(objc) {
    return JSON.parse(JSON.stringify(Tenis))
} 

let clone1 = cloneObject(Tenis)
let clone1 = cloneObject(link)

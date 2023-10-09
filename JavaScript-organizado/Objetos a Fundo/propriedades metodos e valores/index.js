// primeiro modo
// function Tenis(tamanho, estoque, preco){
//     return {
//         tamanho: tamanho, // pode retirar o parametro depois dos dois pontos, não e obrigatorio
//         estoque,
//         preco,
//     }
// }

// console.log(Tenis(39, true, "R$ 399"))

// 2 modo

// const tamanho = 35;
// const estoque = true;
// const preco = "R$ 399";

// const Tenis2 = {
//     tamanho,
//     estoque,
//     preco,
// }

// console.log(Tenis2)

// 3 modo
const Tenis3 = {
    getTamanho(){
        return 25;
    },
};


console.log(Tenis3.getTamanho());

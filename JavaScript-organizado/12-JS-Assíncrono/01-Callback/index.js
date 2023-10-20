/**
 * O conceito de callback está relacionado à programação assincrona,
 * onde certoas operações podem levar tempo para serem concluidas,
 * como chamar uma API, manipulação de arquivos ou consultas a bancos de dados.
 * 
 * Em vez de esperar que essas operações sejam concluídas antes de continuar
 * a execusão do código, os callbacks permitem que o código continue a ser
 * executado, e quando a operação assincrona é finalizada, o callbeck é chamado
 * para lidar com o resultado 
 */

/// modo 0'
setInterval(() => {
    returnConsole();
}, 2000);

const returnConsole = () => {
    return console.log("meu console funcionou")
};

// modo 02
const meuCallback = (func) => {
    console.log(func())
};

meuCallback(() => {
    return 1 + 1;
});

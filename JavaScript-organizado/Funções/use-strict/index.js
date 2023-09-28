/*
    O strict mode elimina alguns erros silenciosos
    que passariom batido do Javascript e os faz imitir erros.

    Além disso, essa forma corrige alguns erros que tornam o javaScript
    dificil de ser otimizado, então algumas vezes o código no modo estrito
    rodam mais otimizado e valores do que os códigos no 'modo normal'.
*/

'use strict'

(() => {
    let teste = "TESTE";
})();

console.log(teste)

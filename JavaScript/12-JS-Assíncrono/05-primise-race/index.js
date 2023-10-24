/**
 * A principal utilidade do Promise.race é quando deseja executar
 * várias operações assincronas simultaneamente e obter o resuldado
 * da primeira operação que for concluida.
 *
 * Isso é especialmente útil quando vocé tem um conjunto de promessas
 * e está interessado apenas no resultado da primeira a ser resolvida
 * ou rejeitada, ignorando as demais.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("primise 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("primise 2");
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("primise 3");
  }, 1000);
});

Promise.race([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});

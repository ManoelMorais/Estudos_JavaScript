/**
 * Async/await; o async/await é uma forma mais recente e mais legal
 * de liadar com tarefas assíncronas em JS
 *
 * Essa abordagem utiliza as palavras async e await para indicar funções
 * assincronas e pausar a execução até uma Promise seja resolvida
 */

const Pedido = (pedido) => {
  return new Promise((resolve, reject) => {
    if (pedido === "pizza") {
      reject(`Não temos o seu pedido: [${pedido}]`);
    }

    setTimeout(() => {
      resolve(`chegou o seu pedido [${pedido}]`);
    }, 5000);
  });
};

const reservaPedido = async () => {
  try {
    console.log(await Pedido("Arroz"));
    console.log(await Pedido("piza"));
    console.log(await Pedido("carne"));
  } catch (err) {
    console.log(err);
  }
};

reservaPedido();

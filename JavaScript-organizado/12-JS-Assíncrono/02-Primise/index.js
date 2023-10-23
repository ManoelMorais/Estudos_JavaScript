/**
 * Promises: AS promises são objetos que representam a conclusão (ou falha)
 * de uma tarefa assincrona. Elas fornecem uma sintaxe mais limpa e estrutural
 * para lidar com código assincrono, permitindo encadear chamadas e tratar erros
 * de forma mais eficiente.
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

Pedido("pizza")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Produto pronto, saiu para enviu")
  })
  ;

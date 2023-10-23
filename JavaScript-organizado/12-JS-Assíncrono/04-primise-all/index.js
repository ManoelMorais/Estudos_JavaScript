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

Promise.all(() => [Pedido('Arroz'), Pedido('Feijão')]).then((res) => {
    console.log(res)
    console.log(res[1])
}).catch((error) => {
    console.log(error)
});
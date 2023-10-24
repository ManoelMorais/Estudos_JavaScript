/**
 *  A função Promise.allSettled é usada em JS para lida com várias promessas 
 * de forma assíncrona e obter os resultados de todas as promessas, independentemente
 * de terem sido resolvidas ou rejeitadas.
 * 
 * Ela retorna uma nova promessa que é resolvida com um array de objeto que descrevem
 * o resultado de cada promessa.
 * 
 * A principal ulitidade do Promise.allSettled é quando deseja aguardar
 * a conclusão de um conjunto de promessas e obter informações sobre todas elas,
 * mesma que algumas tenha sido rejeitada.
 * 
 * Diferentemente do Promise.all, que é interrompido se alguma das promessas
 * for rejeitada, o Promise.allSettlled aguardará a conclusão de todoas as promessas,
 * independentemente do resultado
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
  

  Promise.allSettled([promise1,promise2,promise3]).then((resAllSettled) => {
    console.log(resAllSettled);
  });

  Promise.allSettled([promise1,promise2,promise3]).then((resAllSettled) => {
    resAllSettled.forEach((item) => {

      if(item.status === 'fulfilled'){
        console.log(item.value)
      } 

      if(item.status === 'rejected'){
        console.log(item.value)
      }
    });
  });
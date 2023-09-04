function testPromise() {
  console.log("sync started");

  const p1 = new Promise((resolver, reject) => {
    setTimeout(() => {
      console.log("p1 finished");
      resolver(1);
    }, 1000);
  });
  const p2 = new Promise((resolver, reject) => {
    setTimeout(() => {
      console.log("p2 finished");
      resolver(2);
    }, 2000);
  });
  const p3 = new Promise((resolver, reject) => {
    setTimeout(() => {
      console.log("p3 finished");
      resolver(3);
    }, 3000);
  });
  const p4 = new Promise((resolver, reject) => {
    setTimeout(() => {
      console.log("p4 finished");
      //resolver(1);
      reject(4)
    }, 4000);
  });

  Promise.all([p1, p2, p3, p4]).then((values) => {
    console.log("fim")
  }).catch(() => {
    console.error("async error")
  })

  console.log("sync finished");
}

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", testPromise);

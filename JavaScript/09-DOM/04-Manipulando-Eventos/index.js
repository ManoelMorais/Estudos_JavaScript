// aula 01
const acionarAlert = (click) => {
  alert(click);
};

//  aula 02
// não ta pegando kkkkkk NÂO USARRRRRR
const button = document.getElementById("button");

button.onclick = function alert01() {
  alert(123);
};

// aula 03

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector("body").style.background = "red";
});

// aula 04

const botao = document.getElementById("botao");

const alertAcionado = () => {
  let validador = false;
  alert(123);
  if (validador) {
    botao.removeEventListener("click", alertAcionado);
  }
};
botao.addEventListener("click", alertAcionado);

// aula 05

const link = document.getElementById("link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("evento previnido");
});

// aula 06

const menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
  const { target } = event;
  const body = document.querySelector('body')

  switch (target.getAttribute("class")) {
    case "home":    
        body.style.background = "blue";
        body.style.color = "white"
      break;
    case "about":
        body.style.background = "black";
        body.style.color = "white"
      break;
    case "contact":
        body.style.background = "green";
        body.style.color = "white"
      break;
  }
});

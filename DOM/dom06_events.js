
document.addEventListener("DOMContentLoaded", () => {
    const nome = document.querySelector("#title") 
    console.log("nome",nome) 
})

const button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("clicou")
})

const link = document.querySelector("#mdn")
link.addEventListener("click", (event) => {
    event.preventDefault() //não deixa seguir o caminho, ele para
    console.log("clicou no link")
})

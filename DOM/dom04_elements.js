const nome = window.prompt("nome da sua lista?")

const subTitleEl = document.createElement("h2")
subTitleEl.innerHTML = (nome)

const pjListEl = document.createElement("ul")

const pjListItem1El = document.createElement("li")
pjListItem1El.innerHTML = "comida"

const pjListItem2El = document.createElement("li") 
pjListItem2El.innerHTML = "produtos"

const pjListItem3El = document.createElement("li")
pjListItem3El.innerHTML = "utensilios"

pjListEl.append(pjListItem1El)
pjListEl.append(pjListItem2El)
pjListEl.append(pjListItem3El)

document.body.append(subTitleEl)
document.body.append(pjListEl)

for (let total = 1; total < 10; total++){
    pjListItem3El.innerHTML = `${total}`
}
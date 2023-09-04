const formEL = document.querySelector("form")

formEL.addEventListener("submit", (event) => {
    const queryValue = event.target.querySelector("input[name=q]").value
    console.log("queryValue", queryValue)
    
    if (!queryValue){
        event.preventDefault()
        alert("campo de busca obrigatório")
    }
})
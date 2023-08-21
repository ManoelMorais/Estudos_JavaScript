const pageEL =  document.querySelector("#page")
const buttonEl = document.querySelector("#butao")

buttonEl.addEventListener("click", () => {
    // if (pageEL.classList.contains("title-page")){
    //     pageEL.classList.remove("title-page")
    // } else {
    //     pageEL.classList.add("title-page")
    // }


    pageEL.classList.toggle("title-page")
})
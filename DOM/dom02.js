console.log("*", document.querySelectorAll("*"))

console.log("id", document.querySelector("#infor"))

console.log("tag", document.querySelectorAll("p"))

console.log("class", document.querySelectorAll(".case"))

console.log("attr", document.querySelectorAll("a[href]"))

console.log(
    "link",
    document.querySelectorAll("a[href='https://github.com/ManoelMorais']")
)

for (const el of document.querySelectorAll("*")){
    console.log("el", el)
}
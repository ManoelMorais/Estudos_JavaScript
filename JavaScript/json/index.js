//convertor de js para outras linguas


const person = {
    name: "manoel",
    age: 18,
    address: {
        street: "avenida principal",
        number: "555",
        complemente: "ao lado do colégio",
        distric: "centro",
        city: "Aracaju",
        state: "Aju",
    }
}
const personStr  = JSON.stringify(person) //converte para outra lingua
const personObj  = JSON.parse(personStr) //volta ao normal 

//console.log(personStr)
console.log(personObj)




//JSON.stringify(obj) //coverte para string 
//JSON.parse(str) // converte para objeto
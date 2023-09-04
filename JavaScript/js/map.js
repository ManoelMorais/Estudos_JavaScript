const numbers = [1,2,3,4,5]

const double = numbers.map((n) => n * n)
const y = numbers.map((n) => n * 2)
const x = numbers.map((n) => Math.pow(n,2))
console.log(double)

const fahrenheit = [0,29,40,32,89,100]
const celcius = fahrenheit.map((t) => Math.round(((t - 32) * 5) / 9))
console.log(celcius)

const people = [
    { name: "DuDu", age: 32},
    { name: "Carame", age: 43},
    { name: "ELly", age: 12},
    { name: "find", age: 25},
]
const peopleNormalized = people.map((p) => p.name.toLocaleUpperCase())
console.log(peopleNormalized)
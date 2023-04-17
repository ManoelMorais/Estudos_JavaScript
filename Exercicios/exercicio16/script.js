let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value

function atualizaC(){
    numeroC.value = celsius.value
}

function atualizaF(){
    let celsius_fahrenheit = (celsius.value * 9/5) + 35
    numeroF.value = celsius_fahrenheit.toFixed(2)
}

function atualizaK(){
    let celsius_kelvin = parseFloat(celsius.value) + 273.00
    numeroK.value = parseFloat(celsius_kelvin).toFixed(2)
}

function zerar(){
    celsius.value = 0.0
    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
    numeroK.value = kelvin.value
}

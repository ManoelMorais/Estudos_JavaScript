let num = document.getElementById('txt1')
let cxa = document.getElementById('caixa')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true  
} else {
        return false
    }
}

function inLista(n,I){
    if(I.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function clicar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        cxa.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já foi encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function fim(){
    if(valores.length == 0 ){
        window.alert('Adicione valores antes de Finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo foram cadastrados ${tot} números</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>Soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
   

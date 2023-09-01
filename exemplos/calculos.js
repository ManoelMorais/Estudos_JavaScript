function calcular(conta){
    const num1 = document.querySelector('#caixa1').value
    const num2 = document.querySelector('#caixa2').value
    const resposta = document.querySelector('#resultado')
    
    let resu

    switch(conta){
        case '+': resu = somar(num1, num2);break;
        case '-': resu = subtrair(num1, num2);break;
        case '/': resu = dividir(num1, num2);break;
        case '*': resu = multiplicar(num1, num2);break;
    }

    resposta.innerHTML = `${resu}`
    
}
function somar(num1, num2){
    return Number(num1) + Number(num2)
}   
function subtrair(num1, num2){
    return Number(num1) - Number(num2)
}
function multiplicar(num1, num2){
    return Number(num1) * Number(num2)
}
function dividir(num1, num2){
    if(num1 && num2 == 0){
        window.alert('Escolha outro numero que não sejá igual')
    } else {
        return Number(num1) / Number(num2)
    }
    
}


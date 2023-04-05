function verificar() {
    var p1 = document.getElementById('txt1')
    var p2 = document.getElementById('txt2')
    var p3 = document.getElementById('txt3')
    var p4 = document.getElementById('res')


    if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Falta colocar dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var t1 = Number(p1.value)
        var t2 = Number(p2.value)
        var t3 = Number(p3.value)

        if ( t3 <= 0) {
            window.alert('Passo inválido! Considerar caixa 3 acima do valor 1')
            t3 = 1 
        }

        if ( t1 < t2 ) {
            //contagem crescente
            for(var c = t1; c <= t2; c += t3) {
                res.innerHTML += `${c} 👉`
            }    
        } else {
            //contagem regressiva
            for(var c = t1; c >= t2; c -= t3){
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `✨`
    }
}
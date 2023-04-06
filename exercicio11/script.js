function clicar(){
    let num = document.getElementById('txt1')
    let res = document.getElementById('caixa')
    if (num.value.length == 0){
        window.alert('Por favor, coloque um valor valido!')
    } else {
        let c = Number(num.value)
        res.innerHTML = ""
        for (let n = 1; n <= 100; n++){
            let item = document.createElement('option')
            item.text 
        }
    }
}
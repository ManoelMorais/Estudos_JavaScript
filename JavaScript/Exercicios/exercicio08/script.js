function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique seus dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10 ) {
                    genero='criança'
                img.setAttribute('src','homem-criança.jpg')
            } else if (idade < 22) {
                    genero='jovem'
                img.setAttribute('src','homem-jovem.jpg')
            } else if (idade < 55) {
                   genero='adulto'
               img.setAttribute('src','homem-adulto.jpg')
            } else {
                    genero='idoso'
                img.setAttribute('src','homem-idoso.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10 ) {
                   genero='criança'
                img.setAttribute('src','mulher-criança.jpg')
            } else if (idade < 22) {
                   genero='jovem'
                img.setAttribute('src','mulher-jovem.jpg')
            } else if (idade < 55) {
                   genero='atulda'
                img.setAttribute('src','mulher-adulto.jpg')
            } else {
                    //idosa não consegui a foto, fol mal kkkkk
                img.setAttribute  ('src','')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
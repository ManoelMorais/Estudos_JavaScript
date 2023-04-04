function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('fotos')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'silhueta-3d-de-um-homem-com-os-bracos-levantados-contra-uma-paisagem-do-oceano-do-por-do-sol.jpg'
        //document.body.style.backgound = "cor"
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'nuvem-no-ceu-azul.jpg'
        //document.body.style.backgound = "cor"
    }else  {
        //Boa noite
        img.src = 'lua-cheia-no-ceu-escuro-durante-o-nascer-da-lua.jpg'
        //document.body.style.backgound = "cor"
    }
}
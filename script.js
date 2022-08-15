function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date ()
var hora = data.getHours()
//hora = 8
//hora = 15
msg.innerHTML = `Agora São ${hora} horas.`
hora = 8
if (hora >= 0 && hora < 12){
    // Good Morning
    img.src = '_manha.png'
    document.body.style.background = '#fcae97'

}else if (hora >= 12 && hora <= 18){
    //Good Afternoon
    img.src = '_tarde.png'
    document.body.style.background = '#ff9a02'

}else {
    // Good Evering 
    img.src = '_noite.png'
    document.body.style.background = '#515154' 
}
}

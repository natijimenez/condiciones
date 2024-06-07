//EJERCICIO 1
const logoPeanuts = document.querySelector("#logoPeanuts")
logoPeanuts.addEventListener("click", ()=> {
    logoPeanuts.classList.toggle('border')
})



//EJERCICIO 2
const stickerUno = document.querySelector("#inputUno")
const stickerDos = document.querySelector("#inputDos")
const stickerTres = document.querySelector("#inputTres")
const botonStickers = document.querySelector("#botonStickers")
const mensajeSticker = document.querySelector("#mensajeSticker")

botonStickers.addEventListener("click", ()=> {
    const cantStickerUno = stickerUno.value
    const cantStickerDos = stickerDos.value
    const cantStickerTres = stickerTres.value
    const totalStickers = Number(cantStickerUno) + Number(cantStickerDos) + Number(cantStickerTres)

    if(totalStickers <= 10) {
        mensajeSticker.innerHTML = "*Llevas " + totalStickers + " stickers"
    } else {
        mensajeSticker.innerHTML = "*Llevas demasiados stickers"
    }
})



//EJERCICIO 3
const primerNum = document.querySelector("#selectorUno")
const segundoNum = document.querySelector("#selectorDos")
const tercerNum = document.querySelector("#selectorTres")
const botonPass = document.querySelector("#botonPassword")
const mensajePass = document.querySelector("#mensajePassword")

botonPass.addEventListener("click", ()=> {
    const primerNumero  = primerNum.value
    const segundoNumero = segundoNum.value
    const tercerNumero = tercerNum.value

    validacionPass = primerNumero + segundoNumero + tercerNumero

    if (validacionPass == 911) {
        mensajePass.innerHTML = "*pasword 1 correcto"
    } else if (validacionPass == 714) {
        mensajePass.innerHTML = "*pasword 2 correcto"
    } else {
        mensajePass.innerHTML = "*password incorrecto"
    }
})

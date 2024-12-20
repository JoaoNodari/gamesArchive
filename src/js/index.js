const sliders = document.querySelectorAll(".slide")
const btnAvancar = document.getElementById("seta-avancar")
const btnVoltar = document.getElementById("seta-voltar")


btnAvancar.addEventListener("click", () => {
    const atual = document.querySelector(".slide.mostrar")
    atual.classList.remove("mostrar")


    let indiceAtual = Array.from(sliders).indexOf(atual)
    console.log("Indice atual: ", indiceAtual)

    let proximoIndice = (indiceAtual + 1) % sliders.length
    console.log("Priximo indice: ", proximoIndice)

    if (proximoIndice > sliders.length) {
        return
    }

    sliders[proximoIndice].classList.add("mostrar")
    console.log(sliders)

})


btnVoltar.addEventListener("click", () => {
    const atual = document.querySelector(".slide.mostrar")
    atual.classList.remove("mostrar")


    let indiceAtual = Array.from(sliders).indexOf(atual)
    console.log("Indice atual: ", indiceAtual)

    let proximoIndice = (indiceAtual - 1 + sliders.length) % sliders.length
    console.log("Priximo indice: ", proximoIndice)

    if (proximoIndice > sliders.length) {
        return
    }

    sliders[proximoIndice].classList.add("mostrar")
    console.log(sliders)
})
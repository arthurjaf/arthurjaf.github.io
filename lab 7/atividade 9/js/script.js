const botao9 = document.querySelector(".questao9")

let calculoMedia = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")
    const val2 = document.getElementById("b")
    const val3 = document.getElementById("c")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    const num3 = isNaN(parseFloat(val3.value))? 0:parseFloat(val3.value)

    const media = ((num1*2)+(num2*3)+(num3*5))/10 

    resp.innerHTML = "Média = " + media
}


botao9.addEventListener("click", () => {
    calculoMedia()
})
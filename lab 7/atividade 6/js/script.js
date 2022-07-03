const botao6 = document.querySelector(".questao6")

let custoCarro = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)

    const custo = (num1+(num1*0.28)+(num1*0.45)).toFixed(2) 

    resp.innerHTML = "Custo = R$" + custo 
}

botao6.addEventListener("click", () => {
    custoCarro()
})
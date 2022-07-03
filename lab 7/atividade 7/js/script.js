
const botao7 = document.querySelector(".questao7")

let calculoSalario = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")
    const val2 = document.getElementById("b")
    const val3 = document.getElementById("c")
    const val4 = document.getElementById("d")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    const num3 = isNaN(parseFloat(val3.value))? 0:parseFloat(val3.value)
    const num4 = isNaN(parseFloat(val4.value))? 0:parseFloat(val4.value)

    const salario = num3 + (num1*num4) + (0.05*num2) 

    resp.innerHTML = "Salário = R$" + salario 
}

botao7.addEventListener("click", () => {
    calculoSalario()
})
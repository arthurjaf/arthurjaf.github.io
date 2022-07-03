const botao5 = document.querySelector(".questao5")

let salarioCalculo = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")
    const val2 = document.getElementById("b")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0: parseFloat(val2.value)

    const percent = 1+(parseFloat(num2)/100)

    const salario = (num1*percent).toFixed(2) 
    resp.innerHTML = "Salário = R$" + salario 
}
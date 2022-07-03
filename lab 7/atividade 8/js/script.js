const botao8 = document.querySelector(".questao8")

let calculoCelcius = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)

    const celcius = ((num1 - 32)/9) * 5  

    resp.innerHTML = "Celcius = " + celcius + "ºC"
}

botao8.addEventListener("click", () => {
    calculoCelcius()
})
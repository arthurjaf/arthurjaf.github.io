
const botao4 = document.querySelector(".questao4")
let hipotetusa = () => {
    const resp = document.getElementById("resp")

    const val1 = document.getElementById("a")
    const val2 = document.getElementById("b")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)

    const hipotetusa = Math.sqrt((num1*num1) + (num2*num2)) 
    resp.innerHTML = "Hipotenusa = " + hipotetusa 
}
 
botao4.addEventListener("click", () => {
    hipotetusa()
})
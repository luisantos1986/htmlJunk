function calcular() {
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let parrafo = document.getElementById("res")

    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)

    let total = n1 + n2

    parrafo.innerHTML = total
}
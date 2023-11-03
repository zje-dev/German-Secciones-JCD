let firstValue = parseFloat(prompt("Inserte el primer valor"))
let secondValue = parseFloat(prompt("Inserte el segundo valor"))
if (!isNaN(firstValue) && !isNaN(secondValue)) {
    if (firstValue > secondValue) {
        alert("Valor "+firstValue+" es mayor que "+secondValue)
    } else if (secondValue > firstValue) {
        alert("Valor "+secondValue+" es mayor que"+firstValue)
    } else if (secondValue == firstValue) {
        alert("Ambos valores son iguales")
    }
} else {
    alert("Uno de los valores insertados no es un número")
}
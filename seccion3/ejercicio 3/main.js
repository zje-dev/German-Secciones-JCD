let firstValue = parseFloat(prompt("Inserte el primer valor"))
let secondValue = parseFloat(prompt("Inserte el segundo valor"))
if (!isNaN(firstValue) && !isNaN(secondValue)) {
    if (firstValue > secondValue) {
        console.log("Valor "+firstValue+" es mayor que "+secondValue)
    } else if (secondValue > firstValue) {
        console.log("Valor "+secondValue+" es mayor que"+firstValue)
    } else if (secondValue == firstValue) {
        console.log("Ambos valores son iguales")
    }
} else {
    console.log("Uno de los valores insertados no es un número")
}
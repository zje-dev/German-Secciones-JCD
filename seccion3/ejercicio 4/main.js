let firstValue = parseFloat(prompt("Inserte el primer valor"))
let secondValue = parseFloat(prompt("Inserte el segundo valor"))
let thridValue = parseFloat(prompt("Inserte el tercer valor"))
if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thridValue)) {
    if (firstValue > secondValue && firstValue > thridValue) {
        alert("El valor mayor es del primero")
    } else if (secondValue > firstValue && secondValue > thridValue) {
        alert("El valor mayor es del segundo")
    } else if (thridValue > firstValue && thridValue > secondValue) {
        alert("El valor mayor es del tercero")
    } else if (thridValue == firstValue && firstValue == secondValue) {
        alert("Los valores son iguales")
    }
} else {
    alert("Uno de los valores insertados no es un número")
}
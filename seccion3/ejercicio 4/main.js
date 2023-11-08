let firstValue = parseFloat(prompt("Inserte el primer valor"))
let secondValue = parseFloat(prompt("Inserte el segundo valor"))
let thridValue = parseFloat(prompt("Inserte el tercer valor"))
if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thridValue)) {
    if (firstValue > secondValue && firstValue > thridValue) {
        console.log("El valor mayor es del primero")
    } else if (secondValue > firstValue && secondValue > thridValue) {
        console.log("El valor mayor es del segundo")
    } else if (thridValue > firstValue && thridValue > secondValue) {
        console.log("El valor mayor es del tercero")
    } else if (thridValue == firstValue && firstValue == secondValue) {
        console.log("Los valores son iguales")
    }
} else {
    console.log("Uno de los valores insertados no es un número")
}
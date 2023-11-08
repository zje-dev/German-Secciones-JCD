let number = parseFloat(prompt("Inserte un valor"))
if (!isNaN(number)) {
    if (number % 2 == 0) {
        console.log("El valor es par")
    } else {
        console.log("El valor no es par")
    }
} else {
    console.log("El valor ingresado no es un número")
}
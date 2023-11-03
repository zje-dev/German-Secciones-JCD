let number = parseFloat(prompt("Inserte un valor"))
if (!isNaN(number)) {
    if (number % 2 == 0) {
        alert("El valor es par")
    } else {
        alert("El valor no es par")
    }
} else {
    alert("El valor ingresado no es un número")
}
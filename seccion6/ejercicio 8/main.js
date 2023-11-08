let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    var result = 0
    for (let i = 0; i <= number; i++) {
        result += (i ** 2)
    }
    console.log("La suma de los cuadrados es "+result)
} else {
    console.log("El valor ingresado no es un número")
}
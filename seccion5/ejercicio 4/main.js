let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    console.log("El factorial es "+factor)
} else {
    console.log("El valor ingresado no es un número")
}
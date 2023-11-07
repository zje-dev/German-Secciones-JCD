let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    alert("El factorial es "+r)
} else {
    alert("El valor ingresado no es un número")
}
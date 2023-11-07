let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor *= i
    }
    alert("El factorial es "+factor)
} else {
    alert("El valor ingresado no es un número")
}

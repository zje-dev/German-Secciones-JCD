let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    var restult = 0
    for (let i = 1; i <= number; i++) {
        restult += i
    }
    console.log("Resultado: "+restult)
} else {
    console.log("El valor insertado no es un número")
}
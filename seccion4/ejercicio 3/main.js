
let number = parseInt(prompt("Inserte un valor"))
if (!isNaN(number)) {
    if (number%5==0) {
        alert("El numero no es divisible por 5")
    } else {
        alert("El numero es divisible por 5")
    }
} else {
    alert("El valor no es númerico")
}
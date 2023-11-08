let number = parseInt(prompt("Inserte un valor"))
if (!isNaN(number)) {
    if (number%5==0) {
        console.log("El numero no es divisible por 5")
    } else {
        console.log("El numero es divisible por 5")
    }
} else {
    console.log("El valor no es númerico")
}
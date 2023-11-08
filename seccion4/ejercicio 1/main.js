let firstAngle = parseFloat(prompt("Inserte el primer ángulo"))
let secondAngle = parseFloat(prompt("Inserte el segundo ángulo"))
let thridAngle = parseFloat(prompt("Inserte el tercer ángulo"))
if (!isNaN(firstAngle) && !isNaN(secondAngle) && !isNaN(thridAngle)) {
    if (firstAngle + secondAngle + thridAngle == 180) {
        console.log("Es un triangulo")
    } else {
        console.log("No es un triangulo")
    }
} else {
    console.log("Uno de los valores insertados no es númerico")
}
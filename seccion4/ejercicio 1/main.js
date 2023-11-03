let firstAngle = parseFloat(prompt("Inserte el primer ángulo"))
let secondAngle = parseFloat(prompt("Inserte el segundo ángulo"))
let thridAngle = parseFloat(prompt("Inserte el tercer ángulo"))
if (!isNaN(firstAngle) && !isNaN(secondAngle) && !isNaN(thridAngle)) {
    if (firstAngle + secondAngle + thridAngle == 180) {
        alert("Es un triangulo")
    } else {
        alert("No es un triangulo")
    }
} else {
    alert("Uno de los valores insertados no es númerico")
}
let number1 = parseFloat(prompt("Inserte el primer número"))
let number2 = parseFloat(prompt("Inserte el segundo número"))
if (!isNaN(number1) && !isNaN(number2)) {
    console.log("Producto: ",number1*number2)
    console.log("Cociente: ",number1/number2)
    console.log("Módulo: ",number1%number2)
    console.log("Suma: ",number1+number2)
    console.log("Resta: ",number1-number2)
} else {
    console.log("Uno de los valores ingresados no es número")
}
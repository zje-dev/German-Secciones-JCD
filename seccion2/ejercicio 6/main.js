let value = parseFloat(prompt("Insertar un valor"))
let percentage = parseFloat(prompt("Insetar el porcentaje a calcular"))
if (!isNaN(value) && !isNaN(percentage)) {
    console.log("El valor del porcentaje es "+((value/100) * percentage))
} else {
    console.log("Uno de los valores ingresados no es un número")
}
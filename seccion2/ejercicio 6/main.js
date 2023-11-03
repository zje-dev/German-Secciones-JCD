let value = parseFloat(prompt("Insertar un valor"))
let percentage = parseFloat(prompt("Insetar el porcentaje a calcular"))
if (!isNaN(value) && !isNaN(percentage)) {
    alert("El valor del porcentaje es "+((value/100) * percentage))
} else {
    alert("Uno de los valores ingresados no es un número")
}
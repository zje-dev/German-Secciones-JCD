let valor = parseFloat(prompt("Insertar un valor"))
let porcentaje = parseFloat(prompt("Insetar el porcentaje a calcular"))
if (!isNaN(valor) && !isNaN(porcentaje)) {
    alert("El valor del porcentaje es "+((valor/100) * porcentaje))
} else {
    alert("Uno de los valores ingresados no es un número")
}
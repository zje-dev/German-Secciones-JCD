let precio = parseFloat(prompt("Insertar el precio"))
if (!isNaN(precio)) {
    alert("El precio con descuento es de "+(precio-((precio/100) * 10)))
} else {
    alert("El precio debe ser un valor numerico")
}
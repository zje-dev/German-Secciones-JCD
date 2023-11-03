let price = parseFloat(prompt("Insertar el precio"))
if (!isNaN(price)) {
    alert("El precio con descuento es de "+(price-((price/100) * 10)))
} else {
    alert("El precio debe ser un valor numerico")
}
let price = parseFloat(prompt("Insertar el precio"))
if (!isNaN(price)) {
    console.log("El precio con descuento es de "+(price-((price/100) * 10)))
} else {
    console.log("El precio debe ser un valor numerico")
}
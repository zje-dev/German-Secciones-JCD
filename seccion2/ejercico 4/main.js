let price = parseFloat(prompt("Insertar el precio"))
if (!isNaN(price)) {
    let iva = ((price/100) * 19)
    console.log("El precio con iva es de "+(price+iva))
} else {
    console.log("El precio debe ser un número")
}
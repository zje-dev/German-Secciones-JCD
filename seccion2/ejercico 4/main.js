let price = parseFloat(prompt("Insertar el precio"))
if (!isNaN(price)) {
    let iva = ((price/100) * 19)
    alert("El precio con iva es de "+(price+iva))
} else {
    alert("El precio debe ser un número")
}
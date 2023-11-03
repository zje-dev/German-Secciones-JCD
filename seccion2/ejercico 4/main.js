let precio = parseFloat(prompt("Insertar el precio"))
if (!isNaN(precio)) {
    let iva = ((precio/100) * 19)
    alert("El precio con iva es de "+(precio+iva))
} else {
    alert("El precio debe ser un número")
}
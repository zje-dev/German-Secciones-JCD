let product = prompt("Inserte el nombre del producto (lentejas, crema, arroz o vino)").toLowerCase()
if (product == "vino" || product == "crema") {
    alert("El producto tiene IVA")
}
else if (product == "lentejas" || product == "arroz") {
    alert("El producto no tiene IVA")
} else {
    alert("El producto no está en la lista")
}
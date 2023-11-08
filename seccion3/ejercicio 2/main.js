let product = prompt("Inserte el nombre del producto (lentejas, crema, arroz o vino)").toLowerCase()
if (product == "vino" || product == "crema") {
    console.log("El producto tiene IVA")
}
else if (product == "lentejas" || product == "arroz") {
    console.log("El producto no tiene IVA")
} else {
    console.log("El producto no está en la lista")
}
let side = parseFloat(prompt("Inserte el largo de un lado del cubo"))
if (!isNaN(side)) {
    console.log(("El area es "+(side*side*side)))
} else {
    console.log("El lado debe ser un número")
}
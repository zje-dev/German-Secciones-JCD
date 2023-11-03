let side = parseFloat(prompt("Inserte el largo de un lado del cubo"))
if (!isNaN(side)) {
    alert(("El area es "+(side*side*side)))
} else {
    alert("El lado debe ser un número")
}
let lado = parseFloat(prompt("Inserte el largo de un lado del cubo"))
if (!isNaN(lado)) {
    alert(("El area es "+(lado*lado*lado)))
} else {
    alert("El lado debe ser un número")
}
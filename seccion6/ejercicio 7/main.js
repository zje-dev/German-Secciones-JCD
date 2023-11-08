var input
var values = 0
var items = 0
while (input != 0) {
    input = parseFloat(prompt("Inserte un numero"))
    if (isNaN(input)) {
        console.log("El valor no es valido")
        break
    }
    if (input > 0) {
        items++
        values += input
    }
}
if (!isNaN(input))
    console.log("El promedio es "+(values/items))